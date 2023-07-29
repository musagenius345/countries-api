<!-- src/components/CountryCard.svelte -->
<script>
  export let country;
</script>

<div>
  <!-- Use Link component instead of a regular anchor tag -->
  <a href={`/country/${country.cca3}`}>
    <h2>{country.name.common}</h2>
  </a>
  <p>Region: {country.region}</p>
</div>

