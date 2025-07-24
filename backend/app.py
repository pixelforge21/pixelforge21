import os
import razorpay
import openai
import requests
from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

# App setup
app = Flask(__name__, static_folder="build", static_url_path="")

# Razorpay setup
razorpay_client = razorpay.Client(auth=(os.getenv("RAZORPAY_KEY_ID"), os.getenv("RAZORPAY_KEY_SECRET")))

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

# File upload config
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Helper: allowed file types
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# --------------------------- ROUTES --------------------------- #

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
        save_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(save_path)
        return jsonify({'message': 'File uploaded successfully', 'filename': filename})
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
        answer = response['choices'][0]['message']['content'].strip()
        return jsonify({'response': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/create-order', methods=['POST'])
def create_order():
    data = request.json
    amount = int(data.get("amount")) * 100  # Razorpay expects paise
    currency = "INR"
    try:
        order = razorpay_client.order.create({
            "amount": amount,
            "currency": currency,
            "payment_capture": "1"
        })
        return jsonify(order)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/razorpay-webhook', methods=['POST'])
def razorpay_webhook():
    data = request.get_json()
    # Verify signature here if needed
    payment_id = data.get("payload", {}).get("payment", {}).get("entity", {}).get("id")
    amount = data.get("payload", {}).get("payment", {}).get("entity", {}).get("amount")

    # Send confirmation email + notify seller (you can add your logic)
    print(f"Received payment: {payment_id}, Amount: ₹{int(amount)/100}")

    return jsonify({'status': 'Webhook received'})

@app.route('/shiprocket/forward', methods=['POST'])
def forward_order_to_shiprocket():
    data = request.get_json()
    # Construct Shiprocket order payload and call Shiprocket API
    try:
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {os.getenv('SHIPROCKET_TOKEN')}"
        }
        response = requests.post("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", 
                                 headers=headers, json=data)
        return jsonify(response.json())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/process-refund', methods=['POST'])
def process_refund():
    data = request.get_json()
    payment_id = data.get("payment_id")
    amount = data.get("amount")
    try:
        refund = razorpay_client.payment.refund(payment_id, {"amount": int(amount)*100})
        return jsonify(refund)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Serve React frontend
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# --------------------------- MAIN --------------------------- #

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
