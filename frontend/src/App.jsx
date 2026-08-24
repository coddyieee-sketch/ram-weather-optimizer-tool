import React, { useState, useEffect } from 'react';
import { FiSettings, FiMoon, FiSun } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/weather-data')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/ram-usage')
      .then(response => response.json())
      .then(data => setRamUsage(data.usage));
  }, []);

  const handleOptimize = () => {
    setIsOptimizing(true);
    fetch('http://localhost:8000/optimize-ram-usage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        setRamUsage(data.usage);
        setIsOptimizing(false);
      });
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1>RAM Weather Optimizer Tool</h1>
        <button className="settings-button" onClick={handleToggleDarkMode}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <main className="main">
        <section className="weather-section">
          <h2>Weather Data</h2>
          <ul>
            {Object.keys(weatherData).map(key => (
              <li key={key}>
                <span>{key}</span>
                <span>{weatherData[key]}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="ram-usage-section">
          <h2>RAM Usage</h2>
          <p>{ramUsage}%</p>
          <button className="optimize-button" onClick={handleOptimize} disabled={isOptimizing}>
            {isOptimizing ? 'Optimizing...' : 'Optimize RAM Usage'}
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;