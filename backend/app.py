import os
import time
import threading
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Initialize app
app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# OpenAI API Key
openai.api_key = os.getenv("")

# Ensure uploads directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Utility function to check allowed files
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ---------------------- ROUTES ----------------------

# Health check
@app.route('/')
def home():
    return jsonify({"status": "Backend is running"}), 200

# AI Chat endpoint
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message", "")
        if not user_message:
            return jsonify({"error": "Message is required"}), 400

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_message}]
        )

        reply = response['choices'][0]['message']['content']
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Product image upload
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return jsonify({"filename": filename, "url": f"/uploads/{filename}"}), 200

    return jsonify({"error": "Invalid file type"}), 400

# Serve uploaded files
@app.route('/uploads/<filename>')
def serve_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Dummy order endpoint (placeholder for Shiprocket)
@app.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    # You can add validation here
    return jsonify({"message": "Order received", "data": data}), 200

# ---------------------- SELF-PING (RENDER) ----------------------

def self_ping():
    while True:
        try:
            print("Self-pinging backend to prevent sleep...")
            requests.get("https://your-backend-url.onrender.com")  # Replace this with your actual Render URL
        except Exception as e:
            print("Self-ping failed:", e)
        time.sleep(300)  # every 5 minutes

# Start self-ping thread
ping_thread = threading.Thread(target=self_ping)
ping_thread.daemon = True
ping_thread.start()

# ---------------------- MAIN ----------------------

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
