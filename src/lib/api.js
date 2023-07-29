// api.js

import countriesData from './countries.json';

// Function to fetch country data by name
export async function getCountryByName(name) {
  try {
    // Simulate the API call delay (optional, for demonstration purposes)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const country = countriesData.find(country => country.name.common === name);
    if (!country) {
      throw new Error('Country not found.');
    }
    return country;
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
}

// Function to fetch country data by region
export async function getCountriesByRegion(region) {
  try {
    // Simulate the API call delay (optional, for demonstration purposes)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const countriesInRegion = countriesData.filter(
      country => country.region === region
    );
    return countriesInRegion;
  } catch (error) {
    console.error('Error fetching countries by region:', error);
    throw error;
  }
}
// console.log(getCountryByName('Uganda'))
// console.log(countriesData.parse())
