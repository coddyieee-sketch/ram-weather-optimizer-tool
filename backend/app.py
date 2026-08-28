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
LOG_QUERIES = []
STATS = {"cache_hits": 0, "cache_misses": 0}

class Data(BaseModel):
    key: str
    value: str

class Query(BaseModel):
    query: str

@app.post("/reset")
async def reset_data():
    global DATA_STORE, LOG_QUERIES, STATS
    DATA_STORE = []
    LOG_QUERIES = []
    STATS = {"cache_hits": 0, "cache_misses": 0}
    return {"message": "Data reset successfully"}

@app.post("/submit_data")
async def submit_data(data: Data):
    global DATA_STORE
    DATA_STORE.append(data.dict())
    return {"message": "Data submitted successfully"}

@app.get("/get_data")
async def get_data():
    global DATA_STORE
    return DATA_STORE

@app.get("/get_stats")
async def get_stats():
    global STATS
    return STATS

@app.post("/log_query")
async def log_query(query: Query):
    global LOG_QUERIES
    if not query.query:
        raise HTTPException(status_code=422, detail="Query cannot be empty")
    LOG_QUERIES.append(query.query)
    return {"message": "Query logged successfully"}