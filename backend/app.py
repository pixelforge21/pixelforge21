from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import uuid
import openai
from dotenv import load_dotenv

load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configuration
UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
openai.api_key = os.getenv("OPENAI_API_KEY")

# Ensure uploads directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Helper function to validate file type
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ========== ROUTES ==========

# Health Check
@app.route('/')
def index():
    return jsonify({"status": "Backend running successfully"})

# Upload product image
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No image part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = str(uuid.uuid4()) + os.path.splitext(file.filename)[1]
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return jsonify({'filename': filename}), 200
    return jsonify({'error': 'File type not allowed'}), 400

# Serve uploaded image
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# AI Chatbot route for customer support
@app.route('/chat', methods=['POST'])
def ai_chat():
    data = request.get_json()
    user_message = data.get('message')

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful customer support assistant for an e-commerce website named PixelForge."},
                {"role": "user", "content": user_message}
            ]
        )
        ai_reply = response['choices'][0]['message']['content']
        return jsonify({"reply": ai_reply})

    except Exception as e:
        print(f"Error in OpenAI chat: {e}")
        return jsonify({"error": "AI chat failed"}), 500

# Add product (dummy route)
@app.route('/add-product', methods=['POST'])
def add_product():
    data = request.get_json()
    print(f"Received product: {data}")
    return jsonify({"message": "Product added successfully"}), 200

# ========== MAIN ==========
if __name__ == '__main__':
    app.run(debug=True)
