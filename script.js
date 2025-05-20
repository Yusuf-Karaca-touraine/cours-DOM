const venusaurUrl = "https://pokeapi.co/api/v2/pokemon/3/";
fetch(venusaurUrl)
.then((response) => response.json())
.then((pokemon) => {
    document.body.innerHTML +=`
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="Halte la !"/>
    `;
    console.log(pokemon);
});