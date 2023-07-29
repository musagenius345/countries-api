<!-- src/routes/Homepage.svelte -->
<script>
  import { onMount } from 'svelte';
  import { getCountryByName, getCountriesByRegion
  } from '../lib/api.js';
import CountryCard from '$lib/CountryCard.svelte';
  import Card from '$lib/Card.svelte'
  import Select from '$lib/Select/Select.svelte';
  import SelectItem from '$lib/Select/SelectItem.svelte';
  /**
     * @type {any[]}
     */
  let countryList = [];
  let searchTerm = '';
  let selectedRegion = '';

  onMount(async () => {
    countryList = await countries();
  });

  function filterCountries() {
    return countryList.filter((country) => {
      return (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedRegion || country.region.toLowerCase() === selectedRegion.toLowerCase())
      );
    });
  }
</script>

<main>
  <input bind:value={searchTerm} placeholder="Search for a country..." />

  <Select bind:value={selectedRegion}>
    <SelectItem value="">All Regions</SelectItem>
    <!-- Add more options if needed -->
    <SelectItem value="africa">Africa</SelectItem>
    <SelectItem value="americas">Americas</SelectItem>  
    <SelectItem value="asia">Asia</SelectItem>
    <SelectItem value="europe">Europe</SelectItem>
    <SelectItem value="oceania">Oceania</SelectItem>
  </Select>

  <ul>
    {#each countryList as country}

      <Card />
    {/each}
  </ul>


</main>

