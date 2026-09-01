# ram-weather-optimizer-tool
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React: 18+](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

## Executive Overview
The ram-weather-optimizer-tool is a cutting-edge, open-source project designed to optimize Windows 11's built-in Weather app RAM usage. This project leverages the power of FastAPI, Python, React, and Tailwind CSS to provide real-time metrics and interactive dashboards.

## Feature Breakdown
* Real-time RAM usage monitoring
* Interactive dashboards for data visualization
* FastAPI backend for efficient data processing
* React frontend for a seamless user experience
* Tailwind CSS for a modern and responsive design

## API Contract Summary
The API provides the following endpoints:
* `GET /metrics`: Retrieves real-time RAM usage metrics
* `POST /submit`: Submits user data for processing
* `GET /data`: Retrieves processed data
* `POST /reset`: Resets the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interacts with Weather app| WeatherApp
    WeatherApp -->|Consumes RAM| RAMUsage
    RAMUsage -->|Triggers monitoring| MonitoringService
    MonitoringService -->|Sends data to FastAPI| FastAPI
    FastAPI -->|Processes data| DataProcessing
    DataProcessing -->|Stores data in-memory| InMemoryDataStore
    InMemoryDataStore -->|Provides data to React| React
    React -->|Renders interactive dashboards| User
    User -->|Submits data to FastAPI| FastAPI
    FastAPI -->|Processes submitted data| DataProcessing
    DataProcessing -->|Updates in-memory data store| InMemoryDataStore
    InMemoryDataStore -->|Triggers reset| ResetService
    ResetService -->|Resets in-memory data store| InMemoryDataStore
```

## Running the Project
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) allows the React frontend to communicate with the FastAPI backend, even though they are running on different ports. This is achieved by configuring the FastAPI backend to include the necessary CORS headers in its responses.

## Step-by-Step Commands
1. Clone the repository: `git clone https://github.com/your-username/ram-weather-optimizer-tool.git`
2. Navigate to the project directory: `cd ram-weather-optimizer-tool`
3. Install backend packages: `pip install -r requirements.txt`
4. Start the backend: `uvicorn backend.app:app --reload --port 8000`
5. Navigate to the frontend directory: `cd frontend`
6. Install frontend packages: `npm install`
7. Start the frontend: `npm run dev`
8. Open a web browser and navigate to `http://localhost:5173` to access the React frontend.