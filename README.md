# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this FastAPI & React tool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React: 18+](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

## Executive Overview
The ram-weather-optimizer-tool is a FastAPI and React application designed to optimize Windows 11 Weather app RAM usage. The tool provides a user-friendly interface to monitor and control the Weather app's RAM usage, helping to reduce memory waste and improve system performance.

## Feature Breakdown
* Monitor Weather app RAM usage in real-time
* Control Weather app RAM usage with customizable settings
* View system logs and metrics to identify performance bottlenecks
* Interactive dashboard with customizable widgets and charts

## API Contract Summary
The FastAPI backend provides the following API endpoints:
* `GET /ram-usage`: Retrieve current Weather app RAM usage
* `POST /ram-usage`: Update Weather app RAM usage settings
* `GET /system-logs`: Retrieve system logs
* `GET /metrics`: Retrieve system metrics
* `POST /reset`: Reset in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interact with UI| Frontend
    Frontend -->|Fetch RAM usage| FastAPI
    FastAPI -->|Retrieve RAM usage| InMemoryDataStore
    InMemoryDataStore -->|Return RAM usage| FastAPI
    FastAPI -->|Return RAM usage| Frontend
    Frontend -->|Display RAM usage| User
    User -->|Update RAM usage settings| Frontend
    Frontend -->|Update RAM usage settings| FastAPI
    FastAPI -->|Update RAM usage settings| InMemoryDataStore
    InMemoryDataStore -->|Update RAM usage settings| FastAPI
    FastAPI -->|Return success| Frontend
    Frontend -->|Display success| User
    User -->|View system logs| Frontend
    Frontend -->|Fetch system logs| FastAPI
    FastAPI -->|Retrieve system logs| InMemoryDataStore
    InMemoryDataStore -->|Return system logs| FastAPI
    FastAPI -->|Return system logs| Frontend
    Frontend -->|Display system logs| User
    User -->|View metrics| Frontend
    Frontend -->|Fetch metrics| FastAPI
    FastAPI -->|Retrieve metrics| InMemoryDataStore
    InMemoryDataStore -->|Return metrics| FastAPI
    FastAPI -->|Return metrics| Frontend
    Frontend -->|Display metrics| User
```

## Running the Application
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Change into the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
The FastAPI backend is configured to allow CORS requests from the React frontend. This allows the frontend to make requests to the backend despite being hosted on different domains.

## Step-by-Step Commands
1. Install backend packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`
3. Change into the frontend directory: `cd frontend`
4. Install frontend packages: `npm install`
5. Start the frontend: `npm run dev`
6. Open a web browser and navigate to `http://localhost:5173` to access the application.