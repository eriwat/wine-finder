import { createContext, useState, useEffect } from 'react';
import { fetchWineData } from '../utils/api';

export const WineFinderContext = createContext();

export const WineFinderProvider = ({ children }) => {
  const [wineData, setWineData] = useState([]);
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

  const handleSelectCountry = (country) => {
    setSelectedCountry((prevCountries) =>
      prevCountries.includes(country)
        ? prevCountries.filter((item) => item !== country)
        : [...prevCountries, country]
    );
  };

  return (
    <WineFinderContext.Provider value={{ wineData, selectedCountry, handleSelectCountry, isLoading }}>
      {children}
    </WineFinderContext.Provider>
  );
};