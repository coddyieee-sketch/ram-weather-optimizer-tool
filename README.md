# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this tool

## Executive Overview
The ram-weather-optimizer-tool is designed to help users optimize the RAM usage of the built-in Weather app in Windows 11. The tool consists of a FastAPI backend and a React frontend, allowing users to monitor and control the Weather app's RAM usage.

## Feature Breakdown
* Monitor Weather app RAM usage in real-time
* Receive alerts when RAM usage exceeds a certain threshold
* Optimize Weather app RAM usage with a single click
* View detailed statistics on Weather app RAM usage

## API Contract Summary
The FastAPI backend provides the following API endpoints:
* `GET /ram-usage`: Returns the current RAM usage of the Weather app
* `POST /optimize`: Optimizes the Weather app's RAM usage
* `GET /stats`: Returns detailed statistics on Weather app RAM usage
* `POST /reset`: Resets the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interacts with| Frontend
    Frontend -->|Sends request to| Backend
    Backend -->|Processes request| InMemoryDataStore
    InMemoryDataStore -->|Returns data to| Backend
    Backend -->|Returns response to| Frontend
    Frontend -->|Displays data to| User
    subgraph FastAPI Backend
        Backend -->|Optimizes RAM usage| WeatherApp
        WeatherApp -->|Returns optimized RAM usage| Backend
    end
    subgraph React Frontend
        Frontend -->|Renders UI components| User
        User -->|Interacts with UI components| Frontend
    end
    subgraph In-Memory Data Store
        InMemoryDataStore -->|Stores RAM usage data| Backend
        Backend -->|Retrieves RAM usage data| InMemoryDataStore
    end
    subgraph Windows 11 Weather App
        WeatherApp -->|Uses RAM| SystemResources
        SystemResources -->|Provides RAM usage data| Backend
    end
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
The FastAPI backend is configured to allow CORS requests from the React frontend, allowing local communication between the two applications.

## Badges
[![Python version](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/downloads/release/python-390/)
[![FastAPI version](https://img.shields.io/badge/FastAPI-0.92.0-blue.svg)](https://fastapi.tiangolo.com/)
[![React version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite version](https://img.shields.io/badge/Vite-3.1.0-blue.svg)](https://vitejs.dev/)