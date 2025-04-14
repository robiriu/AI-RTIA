# 🌴 Palm Tree Detection Web App

This is a simple web application that detects and counts the number of palm trees in an uploaded image. The app uses a custom-trained object detection model hosted on [Roboflow](https://roboflow.com) and serves predictions through a FastAPI backend. The result is a bounding-box-annotated image along with a count of detected palm trees.

---

## 🚀 Demo

👉 [Watch the Demo Video](https://drive.google.com/file/d/1m_rFfdxZLuelY04jafenI_HtCzsEu-Iw/view?usp=sharing)

---

## 🧠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Python, FastAPI  
- **Model Inference**: Roboflow API  
- **Image Processing**: Pillow (PIL)  
- **Communication**: Fetch API with CORS enabled  

---

## 📦 Features

- Upload an image from your device  
- Sends image to backend and Roboflow model  
- Detects and counts palm trees  
- Displays the total count and the image with bounding boxes  

---

## ⚙️ Requirements

### ✅ Backend Setup (FastAPI + Roboflow)

1. Python 3.8 or higher  
2. Install required Python packages:
    ```bash
    pip install fastapi uvicorn pillow python-multipart inference-sdk
    ```
3. Run the backend server:
    ```bash
    uvicorn main:app --reload
    ```

> Make sure to replace the `api_key` and `model_id` in `main.py` with your own Roboflow credentials if you fork this project.
(I will give you my API key in other submission document)
---

### ✅ Frontend Setup

No build tools required. Just open `index.html` in your browser, or use a local server (e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code).

Make sure the backend server is running locally at: http://localhost:8000/detect/


---

## 🙌 Credits

- [Roboflow](https://roboflow.com) for hosted model and API  
- [FastAPI](https://fastapi.tiangolo.com) for the web backend  
- [Pillow](https://pillow.readthedocs.io/en/stable/) for image handling  

---

## 📬 Contact

For feedback or questions, feel free to reach out via GitHub issues or pull requests.

