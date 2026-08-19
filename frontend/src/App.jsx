import React, { useState, useEffect } from 'react';
import { FiSettings, FiPieChart, FiBarChart, FiDatabase } from 'lucide-react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios.post('http://localhost:8000/submit-form', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <header className="py-4 bg-white/10 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">RAM Weather Optimizer Tool</h1>
          <button
            className="p-2 rounded-full hover:bg-slate-100"
            onClick={handleToggleDarkMode}
          >
            <FiSettings size={20} />
          </button>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">Weather Data</h2>
            <ul>
              {Object.keys(weatherData).map((key, index) => (
                <li key={index}>{`${key}: ${weatherData[key]}`}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">RAM Usage</h2>
            <p>{`Current RAM usage: ${ramUsage}%`}</p>
            <progress
              className="w-full h-4 rounded-lg"
              value={ramUsage}
              max={100}
            />
          </div>
        </section>
        <section className="mt-4">
          <h2 className="text-lg font-bold">Submit Form</h2>
          <form onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="block w-full p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="block w-full p-2 rounded-lg"
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200"
            >
              Submit
            </button>
          </form>
        </section>
        <section className="mt-4">
          <h2 className="text-lg font-bold">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <FiPieChart size={20} />
              <p>Stat 1</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <FiBarChart size={20} />
              <p>Stat 2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <FiDatabase size={20} />
              <p>Stat 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;