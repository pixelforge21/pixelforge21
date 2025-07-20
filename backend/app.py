from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List, Optional
import uuid
import os

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy in-memory storage
products = []
orders = []

# Upload directory
UPLOAD_DIR = "server/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/")
def root():
    return {"message": "PixelForge21 backend is running."}


@app.post("/upload-product/")
async def upload_product(
    title: str = Form(...),
    description: str = Form(...),
    margin_price: float = Form(...),
    selling_price: float = Form(...),
    file: UploadFile = File(...)
):
    product_id = str(uuid.uuid4())
    filename = f"{product_id}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    product = {
        "id": product_id,
        "title": title,
        "description": description,
        "margin_price": margin_price,
        "selling_price": selling_price,
        "image_url": f"/uploads/{filename}"
    }
    products.append(product)
    return {"message": "Product uploaded successfully", "product": product}


@app.get("/products/")
def get_products():
    return products


@app.post("/place-order/")
def place_order(order: dict):
    order_id = str(uuid.uuid4())
    order["order_id"] = order_id
    orders.append(order)
    return {"message": "Order placed", "order_id": order_id}


@app.get("/orders/")
def get_orders():
    return orders


# Serve images statically (for development only)
from fastapi.staticfiles import StaticFiles
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")
