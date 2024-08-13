import { useEffect, useState, useCallback } from "react";

const base_url = 'https://ruby-web-pr9094.pr.testing.vivino.com/api/explore/explore?grape_ids[]=2&grape_filter=varietal';

const sendHttpRequest = async (selectedCountry) => {
    let url = base_url;

    if (selectedCountry.length > 0) {
        const countryParams = selectedCountry.map(countryCode => `country_codes[]=${countryCode}`).join('&');
        url += `&${countryParams}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data.explore_vintage.records;
}

const useHttp = (param) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const clearData = () => {
        setData(initialData);
    }

    const loadData = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await sendHttpRequest(param);
            setData(data);
        } catch (error) {
            setError(error.message || 'Failed to fetch data:');
        } finally {
            setIsLoading(false);
        }
    }, [param]);

    useEffect(() => {
        loadData();
    }, [param]);

    return {
        data,
        isLoading,
        error,
        clearData
    }
};
export default useHttp;