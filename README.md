# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this FastAPI & React tool

## Executive Overview
The Windows 11 built-in Weather app has been known to waste more than 1 GB of RAM, causing performance issues and slowing down the system. This project aims to provide a solution to this problem by creating a tool that optimizes the RAM usage of the Weather app.

## Feature Breakdown
* FastAPI backend to handle API requests and manage in-memory data store
* React frontend to provide a user-friendly interface for interacting with the tool
* CORS enabled to allow local communication between the frontend and backend
* Automated testing setup using pytest to ensure the tool is working as expected

## API Contract Summary
The API provides the following endpoints:
* `POST /reset`: Resets the in-memory data store
* `POST /submit`: Submits data to the in-memory data store
* `GET /data`: Retrieves data from the in-memory data store
* `GET /stats`: Retrieves statistics about the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interacts with| Frontend
    Frontend -->|Sends request to| Backend
    Backend -->|Processes request| InMemoryDataStore
    InMemoryDataStore -->|Returns data to| Backend
    Backend -->|Returns data to| Frontend
    Frontend -->|Displays data to| User
    User -->|Submits data to| Frontend
    Frontend -->|Sends data to| Backend
    Backend -->|Processes data| InMemoryDataStore
    InMemoryDataStore -->|Updates data| Backend
    Backend -->|Returns success to| Frontend
    Frontend -->|Displays success to| User
    User -->|Requests stats| Frontend
    Frontend -->|Sends request to| Backend
    Backend -->|Processes request| InMemoryDataStore
    InMemoryDataStore -->|Returns stats to| Backend
    Backend -->|Returns stats to| Frontend
    Frontend -->|Displays stats to| User
```

## Running the Tool
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Change into the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) is enabled to allow local communication between the frontend and backend. This allows the frontend to make requests to the backend despite being hosted on different ports.

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/downloads/release/python-390/)
[![React: 18](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![FastAPI: 0.92](https://img.shields.io/badge/FastAPI-0.92-green.svg)](https://fastapi.tiangolo.com/)