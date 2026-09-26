# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this FastAPI & React tool

## Executive Overview
The Windows 11 built-in Weather app has been known to waste more than 1 GB of RAM. This project aims to provide a solution to optimize the RAM usage of the Weather app using a FastAPI backend and a React frontend.

## Feature Breakdown
* FastAPI backend to handle API requests and store data in-memory
* React frontend to provide a user interface for interacting with the backend
* CORS enabled to allow local communication between the frontend and backend
* Automated testing using pytest to ensure the correctness of the backend API

## API Contract Summary
The backend API provides the following endpoints:
* `POST /reset`: Resets the in-memory data store
* `POST /submit`: Submits data to the in-memory data store
* `GET /data`: Retrieves data from the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interacts with| Frontend
    Frontend -->|Sends request to| Backend
    Backend -->|Processes request| InMemoryDataStore
    InMemoryDataStore -->|Stores data| Backend
    Backend -->|Returns response to| Frontend
    Frontend -->|Displays response to| User
    subgraph Backend
        Backend -->|CORS enabled| Frontend
    end
    subgraph InMemoryDataStore
        InMemoryDataStore -->|Stores data in-memory| Backend
    end
    subgraph Frontend
        Frontend -->|Uses React| User
    end
```

## Running the Project
### Backend
1. Install packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Install packages: `cd frontend && npm install`
2. Start the frontend: `cd frontend && npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) is enabled to allow local communication between the frontend and backend. This allows the frontend to send requests to the backend and receive responses, even though they are running on different ports.

## Badges
[![Python version](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/downloads/release/python-390/)
[![FastAPI version](https://img.shields.io/badge/FastAPI-0.92.0-blue.svg)](https://fastapi.tiangolo.com/)
[![React version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![npm version](https://img.shields.io/badge/npm-8.19.2-blue.svg)](https://www.npmjs.com/)