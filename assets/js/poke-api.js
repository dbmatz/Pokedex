const pokeApi = {};

const baseUrl = "https://pokeapi.co/api";

pokeApi.getPokemonDetail = (pokemon) => {
    console.log(pokemon)
    return fetch(pokemon.url).then((response) => response.json());
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const urlPokemon = `${baseUrl}/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(urlPokemon)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonsList) => pokemonsList.map(pokeApi.getPokemonDetail))
        .then((pokemonsUrlList) => Promise.all(pokemonsUrlList))
        .catch((error) => console.error(error))
}