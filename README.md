# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this tool

## Executive Overview
The ram-weather-optimizer-tool is designed to help users optimize the RAM usage of the built-in Weather app in Windows 11. The tool consists of a FastAPI backend and a React frontend, allowing users to monitor and control the RAM usage of the Weather app.

## Feature Breakdown
* Monitor RAM usage of the Weather app
* Optimize RAM usage with a single click
* View system logs and metrics
* Interactive dashboard with real-time updates

## API Contract Summary
The FastAPI backend provides the following endpoints:
* `GET /ram-usage`: Get the current RAM usage of the Weather app
* `POST /optimize`: Optimize the RAM usage of the Weather app
* `GET /system-logs`: Get the system logs
* `GET /metrics`: Get the system metrics
* `POST /reset`: Reset the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interact with Frontend| Frontend
    Frontend -->|Fetch RAM usage| FastAPI
    FastAPI -->|Get RAM usage from in-memory store| InMemoryStore
    InMemoryStore -->|Return RAM usage| FastAPI
    FastAPI -->|Return RAM usage to Frontend| Frontend
    Frontend -->|Display RAM usage| User
    User -->|Optimize RAM usage| Frontend
    Frontend -->|Optimize RAM usage| FastAPI
    FastAPI -->|Optimize RAM usage| InMemoryStore
    InMemoryStore -->|Update RAM usage| FastAPI
    FastAPI -->|Return success message| Frontend
    Frontend -->|Display success message| User
    User -->|View system logs| Frontend
    Frontend -->|Fetch system logs| FastAPI
    FastAPI -->|Get system logs from in-memory store| InMemoryStore
    InMemoryStore -->|Return system logs| FastAPI
    FastAPI -->|Return system logs to Frontend| Frontend
    Frontend -->|Display system logs| User
    User -->|View metrics| Frontend
    Frontend -->|Fetch metrics| FastAPI
    FastAPI -->|Get metrics from in-memory store| InMemoryStore
    InMemoryStore -->|Return metrics| FastAPI
    FastAPI -->|Return metrics to Frontend| Frontend
    Frontend -->|Display metrics| User
```

## Running the Project
### Backend
1. Install packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Install packages: `cd frontend && npm install`
2. Start the frontend: `cd frontend && npm run dev`

### CORS
The FastAPI backend is configured to allow CORS requests from the React frontend. This allows the frontend to make requests to the backend without being blocked by the browser's same-origin policy.

## Step-by-Step Commands
1. Clone the repository: `git clone https://github.com/username/ram-weather-optimizer-tool.git`
2. Install backend packages: `pip install -r requirements.txt`
3. Start the backend: `uvicorn backend.app:app --reload --port 8000`
4. Install frontend packages: `cd frontend && npm install`
5. Start the frontend: `cd frontend && npm run dev`
6. Open the frontend in your browser: `http://localhost:5173`

Badges:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/downloads/release/python-390/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.92.0-green.svg)](https://fastapi.tiangolo.com/)