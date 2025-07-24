import os
import razorpay
import openai
import requests
import threading
import time
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# App setup
app = Flask(__name__)

# Razorpay setup
razorpay_client = razorpay.Client(auth=(
    os.getenv("RAZORPAY_KEY_ID"), 
    os.getenv("RAZORPAY_KEY_SECRET")
))

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

# File upload config
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# ----------- Helpers -----------

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ----------- Self Ping -----------

def start_self_ping():
    def ping():
        while True:
            try:
                print("[Ping] Sending keep-alive request...")
                requests.get("https://pixelforge21.onrender.com/keep_alive")
            except Exception as e:
                print(f"[Ping Error] {e}")
            time.sleep(1200)  # every 20 minutes
    thread = threading.Thread(target=ping)
    thread.daemon = True
    thread.start()

# ----------- Routes -----------

@app.route('/keep_alive')
def keep_alive():
    return jsonify({"status": "OK"}), 200

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(path)
        return jsonify({'message': 'File uploaded', 'filename': filename})
    return jsonify({'error': 'Invalid file type'}), 400

@app.route('/chat', methods=['POST'])
def ai_chat():
    data = request.json
    prompt = data.get('prompt', '')
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You're an AI customer support agent for an e-commerce store."},
                {"role": "user", "content": prompt}
            ]
        )
        reply = response['choices'][0]['message']['content'].strip()
        return jsonify({'response': reply})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/create-order', methods=['POST'])
def create_order():
    data = request.json
    amount = int(data.get("amount", 0)) * 100  # paise
    try:
        order = razorpay_client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": "1"
        })
        return jsonify(order)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/razorpay-webhook', methods=['POST'])
def razorpay_webhook():
    data = request.get_json()
    # Optional: Add signature verification here
    payment_id = data.get("payload", {}).get("payment", {}).get("entity", {}).get("id")
    amount = data.get("payload", {}).get("payment", {}).get("entity", {}).get("amount")
    print(f"Webhook: Payment ID={payment_id}, Amount={int(amount)/100}")
    return jsonify({'status': 'Webhook received'}), 200

@app.route('/process-refund', methods=['POST'])
def process_refund():
    data = request.get_json()
    payment_id = data.get("payment_id")
    amount = int(data.get("amount", 0)) * 100
    try:
        refund = razorpay_client.payment.refund(payment_id, {"amount": amount})
        return jsonify(refund)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/shiprocket/forward', methods=['POST'])
def forward_order_to_shiprocket():
    data = request.get_json()
    try:
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {os.getenv('SHIPROCKET_TOKEN')}"
        }
        response = requests.post(
            "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
            headers=headers,
            json=data
        )
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ----------- Main App Run -----------

if __name__ == '__main__':
    start_self_ping()
    app.run(debug=False, host='0.0.0.0', port=5000)
