import React, { useState, useEffect } from 'react';
import { FiSettings, FiMoon, FiSun } from 'lucide-react';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [systemLogs, setSystemLogs] = useState([]);
  const [formInput, setFormInput] = useState({});

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/optimize-weather-app', formInput)
      .then(response => {
        console.log(response.data);
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
      <header className="py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">RAM Weather Optimizer Tool</h1>
        <button className="p-2 rounded-full hover:bg-slate-200" onClick={handleDarkModeToggle}>
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </header>
      <main className="py-6 px-6">
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Weather Data</h2>
          <div className="bg-white/10 rounded-lg p-4">
            <p>Temperature: {weatherData.temperature}</p>
            <p>Humidity: {weatherData.humidity}</p>
            <p>Wind Speed: {weatherData.windSpeed}</p>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">RAM Usage</h2>
          <div className="bg-white/10 rounded-lg p-4">
            <p>RAM Usage: {ramUsage}%</p>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">System Logs</h2>
          <div className="bg-white/10 rounded-lg p-4">
            <ul>
              {systemLogs.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Optimize Weather App</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="input">Input:</label>
              <input
                type="text"
                id="input"
                className="block w-full p-2 rounded-lg"
                value={formInput.input}
                onChange={(event) => setFormInput({ ...formInput, input: event.target.value })}
              />
            </div>
            <button type="submit" className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300">Optimize</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;