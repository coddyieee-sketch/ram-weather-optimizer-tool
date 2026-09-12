import React, { useState, useEffect } from 'react';
import { FiSettings, FiMoon, FiSun } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [systemLogs, setSystemLogs] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch('/api/weather')
      .then(response => response.json())
      .then(data => setWeatherData(data));

    fetch('/api/ram-usage')
      .then(response => response.json())
      .then(data => setRamUsage(data));

    fetch('/api/system-logs')
      .then(response => response.json())
      .then(data => setSystemLogs(data));

    fetch('/api/metrics')
      .then(response => response.json())
      .then(data => setMetrics(data));
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1>RAM Weather Optimizer Tool</h1>
        <button className="settings-button" onClick={handleDarkModeToggle}>
          <FiSettings />
        </button>
        {darkMode ? (
          <button className="dark-mode-button" onClick={handleDarkModeToggle}>
            <FiSun />
          </button>
        ) : (
          <button className="dark-mode-button" onClick={handleDarkModeToggle}>
            <FiMoon />
          </button>
        )}
      </header>
      <main className="main">
        <section className="weather-section">
          <h2>Weather Data</h2>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
        </section>
        <section className="ram-usage-section">
          <h2>RAM Usage</h2>
          <p>{ramUsage}%</p>
          <progress className="ram-usage-progress" value={ramUsage} max="100" />
        </section>
        <section className="system-logs-section">
          <h2>System Logs</h2>
          <ul>
            {systemLogs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </section>
        <section className="metrics-section">
          <h2>Metrics</h2>
          <p>CPU Usage: {metrics.cpuUsage}%</p>
          <p>Memory Usage: {metrics.memoryUsage}%</p>
        </section>
        <form onSubmit={handleSubmit}>
          <label>
            Submit Data:
            <input type="text" name="data" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;