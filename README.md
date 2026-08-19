# ram-weather-optimizer-tool
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React: 18+](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

## Executive Overview
The ram-weather-optimizer-tool is a cutting-edge application designed to optimize Windows 11's built-in Weather app RAM usage. This tool features real-time metrics and interactive dashboards, providing users with a comprehensive overview of their system's performance. Built using FastAPI, Python, React, and Tailwind CSS, this application ensures a seamless and efficient user experience.

## Feature Breakdown
* Real-time metrics and interactive dashboards
* Optimization of Windows 11's built-in Weather app RAM usage
* FastAPI backend with in-memory data store
* React frontend with sleek dark mode theme and Lucide React icons
* Dynamic interactive forms with real-time status indicators and system logs visualizer

## API Contract Summary
The FastAPI backend provides the following endpoints:
* `POST /data`: Submit data to the in-memory data store
* `GET /data`: Retrieve data from the in-memory data store
* `POST /reset`: Reset the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    A[User] -->|Interacts with| B[React Frontend]
    B -->|Sends request to| C[FastAPI Backend]
    C -->|Processes request| D[In-Memory Data Store]
    D -->|Returns data to| C
    C -->|Returns data to| B
    B -->|Renders data to| A
    C -->|CORS allows| E[Local Communication]
    E -->|Enables| B
    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#f9f,stroke:#333,stroke-width:4px
    style C fill:#f9f,stroke:#333,stroke-width:4px
    style D fill:#f9f,stroke:#333,stroke-width:4px
    style E fill:#f9f,stroke:#333,stroke-width:4px
```

## Running the Application
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) allows the React frontend to communicate with the FastAPI backend, even though they are running on different ports. This enables seamless data exchange between the frontend and backend.

## Contributing
Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.