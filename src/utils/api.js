const base_url = 'https://ruby-web-pr9094.pr.testing.vivino.com/api/explore/explore?grape_ids[]=2&grape_filter=varietal';

export async function fetchWineData(selectedCountry) {
  let url = base_url;

  if (selectedCountry.length > 0) {
    const countryParams = selectedCountry.map(countryCode => `country_codes[]=${countryCode}`).join('&');
    url += `&${countryParams}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data.explore_vintage.records;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}