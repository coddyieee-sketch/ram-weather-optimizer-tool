import os
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

class Data(BaseModel):
    key: str
    value: str

@app.post("/reset")
async def reset():
    global DATA_STORE
    DATA_STORE = []
    return {"message": "Data store reset"}

@app.post("/submit")
async def submit(data: Data):
    global DATA_STORE
    DATA_STORE.append(data.dict())
    return {"message": "Data submitted"}

@app.get("/fetch")
async def fetch():
    global DATA_STORE
    return DATA_STORE

@app.get("/stats")
async def stats():
    global DATA_STORE
    return {"count": len(DATA_STORE)}

@app.get("/logs")
async def logs():
    global DATA_STORE
    return DATA_STORE