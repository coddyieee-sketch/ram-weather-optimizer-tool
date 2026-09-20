# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this FastAPI & React tool

## Executive Overview
The Windows 11 built-in Weather app has been known to waste more than 1 GB of RAM. This project aims to provide a solution to optimize the RAM usage of the Weather app using a FastAPI backend and a React frontend.

## Feature Breakdown
* FastAPI backend to handle API requests and store data in-memory
* React frontend to provide a user interface for interacting with the backend
* CORS enabled to allow local communication between the frontend and backend
* Automated testing using pytest to ensure the backend API endpoints are working correctly

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
    User -->|Submits data to| Frontend
    Frontend -->|Sends data to| Backend
    Backend -->|Stores data in| InMemoryDataStore
    InMemoryDataStore -->|Updates data| Backend
    Backend -->|Returns updated data to| Frontend
    Frontend -->|Displays updated data to| User
    User -->|Resets data| Frontend
    Frontend -->|Sends reset request to| Backend
    Backend -->|Resets| InMemoryDataStore
    InMemoryDataStore -->|Clears data| Backend
    Backend -->|Returns reset response to| Frontend
    Frontend -->|Displays reset response to| User
```

## Running the Project
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Change into the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) is enabled to allow local communication between the frontend and backend. This allows the frontend to make requests to the backend API endpoints.

## Badges
[![Python Version](https://img.shields.io/badge/Python-3.9-blue)](https://www.python.org/downloads/release/python-390/)
[![FastAPI Version](https://img.shields.io/badge/FastAPI-0.92.0-blue)](https://fastapi.tiangolo.com/)
[![React Version](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite Version](https://img.shields.io/badge/Vite-3.1.0-blue)](https://vitejs.dev/)