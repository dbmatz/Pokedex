const pokeApi = {};

const baseUrl = "https://pokeapi.co/api";

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const urlPokemon = `${baseUrl}/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(urlPokemon)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}