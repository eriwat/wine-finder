import './App.css'

import { useState, useEffect } from 'react';

import Header from './components/Header';
import WineList from './components/WineList';
import Filter from './components/Filter';
import Spinner from './components/Spinner';

import { fetchWineData } from './utils/api';

function App() {
  const [wineData, setWineData] = useState();
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadWineData() {
      setIsLoading(true);
      try {
        const data = await fetchWineData(selectedCountry);
        setWineData(data);
      } catch (error) {
        console.error('Failed to fetch wine data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadWineData();
  }, [selectedCountry]);

  function handleSelectCountry(country) {
    if (!selectedCountry.includes(country)) {
      setSelectedCountry(prevCountries => [...prevCountries, country]);
    } else {
      setSelectedCountry(prevCountries => prevCountries.filter(item => item !== country));
    }
  }

  return (
    <>
      <Header />
      <Filter onSelectCountry={handleSelectCountry} selectedCountry={selectedCountry} />
      {isLoading &&
        <Spinner />
      }
      <WineList wineData={wineData} />
    </>
  )
}

export default App
