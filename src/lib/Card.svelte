<div class="card">
  <img src="./musa.jpg" alt="">
  <div class="content">
    <p class="country">Country</p>
    <ul>
      <li>Population: </li>
      <li>Region: </li>
      <li>Capital: </li>
    </ul>
  </div>
</div>


<style>
  /* @import 'normalize.css'; */
  
  :global(:root) {
    box-sizing: border-box;
    --shadow-strength: 15%;
    --shadow-color: 220 3% 15%;
    --shadow-3:
      0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
      0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
      0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
      0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
      0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  } 
  .country {
    font-weight: 700;
    font-size: 1.4rem;
  }
  
  img {
    object-fit: cover;
    max-width: 100%;
    overflow: hidden;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  
  
  .card {
    width: 40rem;
    border-radius: 0.612rem;
    background-color: hsla(233, 19%, 92%, 1);
    display: flex;
    box-shadow: var(--shadow-3);
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .content {
    padding-inline: 2.4rem;
  }
</style>
