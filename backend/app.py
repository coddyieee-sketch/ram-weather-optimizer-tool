import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
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
LOGS = []

class Data(BaseModel):
    key: str
    value: str

class Query(BaseModel):
    query: str

@app.post("/submit_data")
async def submit_data(data: Data):
    DATA_STORE.append(data.dict())
    return {"message": "Data submitted successfully"}

@app.get("/get_data")
async def get_data():
    return DATA_STORE

@app.get("/get_stats")
async def get_stats():
    return {"count": len(DATA_STORE)}

@app.post("/log_query")
async def log_query(query: Query):
    LOGS.append(query.dict())
    return {"message": "Query logged successfully"}

@app.get("/get_logs")
async def get_logs():
    return LOGS

@app.post("/reset")
async def reset():
    global DATA_STORE, LOGS
    DATA_STORE = []
    LOGS = []
    return {"message": "Data and logs reset successfully"}