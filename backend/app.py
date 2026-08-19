import os
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "..", "..", ".env"))

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_STORE = []

@app.post("/reset")
async def reset_data():
    global DATA_STORE
    DATA_STORE = []
    return {"message": "Data store reset"}

@app.post("/submit_data")
async def submit_data(data: dict):
    global DATA_STORE
    DATA_STORE.append(data)
    return {"message": "Data submitted"}

@app.get("/get_data")
async def get_data():
    global DATA_STORE
    return DATA_STORE

@app.get("/get_stats")
async def get_stats():
    global DATA_STORE
    stats = {"count": len(DATA_STORE)}
    return stats