import os
import razorpay
import openai
import requests
import threading
import time
from flask import request, jsonify
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
from bson import ObjectId
import random
import smtplib
from email.message import EmailMessage
from pymongo import MongoClient
from werkzeug.security import generate_password_hash
from flask import flask
from flask_cors import CORS

CORS(app, origins=["https://pixelforge21-frontend.onrender.com"])

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


shiprocket_token =
os.getenv("SHIPROCKET_TOKEN")

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

client = MongoClient(os.environ.get("MONGODB_URI"))
db = client['pixelforge21']
users = db['users']
otps = db['otps']

def send_otp_email(recipient, otp):
    msg = EmailMessage()
    msg.set_content(f"Your OTP is: {otp}")
    msg['Subject'] = 'PixelForge21 Signup OTP'
    msg['From'] = os.environ.get("EMAIL_USER")
    msg['To'] = recipient

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(os.environ.get("EMAIL_USER"), os.environ.get("EMAIL_PASS"))
            smtp.send_message(msg)
        return True
    except Exception as e:
        print("Email send failed:", e)
        return False

@app.route("/auth/send-otp", methods=["POST"])
def send_otp():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    mobile = data.get("mobile")
    password = data.get("password")

    if users.find_one({"$or": [{"email": email}, {"mobile": mobile}]}):
        return jsonify({"success": False, "message": "User already exists"}), 400

    otp = str(random.randint(100000, 999999))
    hashed_password = generate_password_hash(password)

    temp_user = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "password": hashed_password,
        "otp": otp
    }

    result = otps.insert_one(temp_user)

    if send_otp_email(email, otp):
        return jsonify({"success": True, "userId": str(result.inserted_id)})
    else:
        otps.delete_one({"_id": result.inserted_id})
        return jsonify({"success": False, "message": "Failed to send OTP"}), 500

@app.route("/auth/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json
    user_id = data.get("userId")
    input_otp = data.get("otp")

    temp_user = otps.find_one({"_id": ObjectId(user_id)})
    if not temp_user:
        return jsonify({"success": False, "message": "User not found"}), 404

    if temp_user["otp"] == input_otp:
        user = {
            "name": temp_user["name"],
            "email": temp_user["email"],
            "mobile": temp_user["mobile"],
            "password": temp_user["password"]
        }
        users.insert_one(user)
        otps.delete_one({"_id": ObjectId(user_id)})
        return jsonify({"success": True, "message": "User verified and registered"})
    else:
        return jsonify({"success": False, "message": "Incorrect OTP"}), 400

# ----------- Main App Run -----------

if __name__ == '__main__':
    start_self_ping()
    app.run(debug=False, host='0.0.0.0', port=5000)
