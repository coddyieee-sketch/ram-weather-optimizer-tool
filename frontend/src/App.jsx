import React, { useState, useEffect } from 'react';
import { FiSettings, FiMoon, FiSun } from 'lucide-react';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [systemLogs, setSystemLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/weather-data')
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/ram-usage')
      .then(response => {
        setRamUsage(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/system-logs')
      .then(response => {
        setSystemLogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleReset = () => {
    axios.post('http://localhost:8000/reset')
      .then(response => {
        setWeatherData({});
        setRamUsage(0);
        setSystemLogs([]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen w-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">RAM Weather Optimizer Tool</h1>
        <button className="p-2 rounded-full hover:bg-slate-200" onClick={handleDarkModeToggle}>
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </header>
      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-xl font-bold">Weather Data</h2>
          <ul>
            {Object.keys(weatherData).map(key => (
              <li key={key}>{`${key}: ${weatherData[key]}`}</li>
            ))}
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold">RAM Usage</h2>
          <p>{`RAM usage: ${ramUsage} MB`}</p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-bold">System Logs</h2>
          <ul>
            {systemLogs.map(log => (
              <li key={log}>{log}</li>
            ))}
          </ul>
        </section>
        <button className="p-2 rounded-full hover:bg-slate-200" onClick={handleReset}>
          <FiSettings size={24} />
        </button>
      </main>
    </div>
  );
}

export default App;