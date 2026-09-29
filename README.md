# ram-weather-optimizer-tool
Optimize Windows 11 Weather app RAM usage with this FastAPI & React tool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React: 18+](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

## Executive Overview
The ram-weather-optimizer-tool is a FastAPI and React application designed to optimize Windows 11's built-in Weather app RAM usage. The tool provides a user-friendly interface for monitoring and optimizing RAM usage, ensuring a seamless user experience.

## Feature Breakdown
* Monitor Windows 11 Weather app RAM usage in real-time
* Optimize RAM usage with a single click
* View detailed statistics on RAM usage and optimization results
* Customizable dashboard with real-time updates

## API Contract Summary
The FastAPI backend provides the following API endpoints:
* `GET /ram-usage`: Retrieve current RAM usage
* `POST /optimize-ram`: Optimize RAM usage
* `GET /stats`: Retrieve detailed statistics on RAM usage and optimization results
* `POST /reset`: Reset all data and optimization results

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    A[User] -->|Interact with Weather app| B[Windows 11 Weather app]
    B -->|Request RAM usage data| C[FastAPI Backend]
    C -->|Retrieve RAM usage data| D[In-Memory Data Store]
    D -->|Return RAM usage data| C
    C -->|Return RAM usage data| B
    B -->|Display RAM usage data| A
    A -->|Optimize RAM usage| C
    C -->|Optimize RAM usage| D
    D -->|Update RAM usage data| C
    C -->|Return optimization results| B
    B -->|Display optimization results| A
    A -->|View statistics| C
    C -->|Retrieve statistics| D
    D -->|Return statistics| C
    C -->|Return statistics| B
    B -->|Display statistics| A
```

## Step-by-Step Commands to Run the Application
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Change directory to frontend: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) allows the React frontend to communicate with the FastAPI backend, even though they are running on different ports. This is achieved by configuring the FastAPI backend to include the necessary CORS headers in its responses.

## How to Contribute
Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.

## License
The ram-weather-optimizer-tool is licensed under the MIT License. See [LICENSE](LICENSE) for details.