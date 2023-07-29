<!-- src/routes/CountryDetail.svelte -->
<script>
  import { countries } from '../lib/api';
  import { onMount } from 'svelte';
  import { link } from 'svelte';

  export let params;
  let country = null;

  onMount(async () => {
    const countryList = await countries();
    country = countryList.find((c) => c.cca3 === params.id);
  });

  function navigateToBorderCountry(event, borderCountry) {
    event.preventDefault();
    link(`/country/${borderCountry.cca3}`);
  }
</script>

{#if country}
  <main>
    <h1>{country.name}</h1>
    <p>Region: {country.region}</p>

    <h2>Bordering Countries:</h2>
    <ul>
      {#each country.borders as border}
        {#if borderCountry = countryList.find((c) => c.cca3 === border)}
          <li>
            <a href={`/country/${borderCountry.cca3}`} on:click|preventDefault={e => navigateToBorderCountry(e, borderCountry)}>
              {borderCountry.name}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  </main>
{:else}
  <p>Loading...</p>
{/if}

