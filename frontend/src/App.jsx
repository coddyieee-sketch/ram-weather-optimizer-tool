import React, { useState, useEffect } from 'react';
import { FiSettings } from 'lucide-react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/weather')
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

    axios.get('http://localhost:8000/logs')
      .then(response => {
        setLogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/stats')
      .then(response => {
        setStats(response.data);
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
        setLogs([]);
        setStats({});
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <header className="py-4 bg-white/10 backdrop-blur-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">RAM Weather Optimizer Tool</h1>
        <button className="p-2 rounded-full hover:bg-slate-100" onClick={handleDarkModeToggle}>
          <FiSettings className="text-lg" />
        </button>
      </header>
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">Weather Data</h2>
            <ul>
              {Object.keys(weatherData).map(key => (
                <li key={key}>{`${key}: ${weatherData[key]}`}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">RAM Usage</h2>
            <p>{`${ramUsage} MB`}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">Logs</h2>
            <ul>
              {logs.map(log => (
                <li key={log}>{log}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-lg font-bold">Stats</h2>
          <ul>
            {Object.keys(stats).map(key => (
              <li key={key}>{`${key}: ${stats[key]}`}</li>
            ))}
          </ul>
        </section>
        <button className="p-2 rounded-full hover:bg-slate-100" onClick={handleReset}>
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;