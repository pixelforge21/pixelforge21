import os

# Base directory of the backend
BASE_DIR = os.path.abspath(os.path.dirname(_file_))

# Configuration settings
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'super-secret-key'
    UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

    # Add other settings if needed later (like DB configs, email, etc.)
