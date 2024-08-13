import './App.css'

import { useState } from 'react';

import Header from './components/Header';
import WineList from './components/WineList';
import CountryFilter from './components/CountryFilter';
import Spinner from './components/Spinner';
import Error from './components/Error';

import useHttp from './hooks/useHttp';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState([]);
  const { data: wineData, isLoading, error } = useHttp(selectedCountry)

  const handleFilterCountry = (filteredCountries) =>{
    setSelectedCountry(filteredCountries);
    console.log('Filtered countries:', filteredCountries);
  }

  return (
    <>
      <Header />
      <CountryFilter onFilterCountry={handleFilterCountry} />
      {isLoading &&
        <Spinner />
      }
      {wineData && <WineList wineData={wineData} />}
      {error && <Error title="Failed to fetch data" message={error} />}
    </>
  )
}

export default App
