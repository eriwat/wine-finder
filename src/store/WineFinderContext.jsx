import { createContext, useState } from 'react';
import useHttp from '../hooks/useHttp';

export const WineFinderContext = createContext();

export const WineFinderProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState([]);
  const {data: wineData, isLoading, error} = useHttp(selectedCountry)

  const handleSelectCountry = (country) => {
    if (!selectedCountry.includes(country)) {
      setSelectedCountry(prevCountries => [...prevCountries, country]);
    } else {
      setSelectedCountry(prevCountries => prevCountries.filter(item => item !== country));
    }
  }

  return (
    <WineFinderContext.Provider value={{ wineData, selectedCountry, handleSelectCountry, isLoading }}>
      {children}
    </WineFinderContext.Provider>
  );
};