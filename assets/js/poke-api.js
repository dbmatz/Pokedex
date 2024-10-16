const pokeApi = {};

const baseUrl = "https://pokeapi.co/api";

function convertPokemonJsonToModel(pokemonDetail) {
    const pokemon = new Pokemon;
    pokemon.name = pokemonDetail.name;
    pokemon.id = String(pokemonDetail.id).padStart(3, '0');
    pokemon.order = pokemonDetail.order;
    pokemon.image = pokemonDetail.sprites.other.dream_world.front_default;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.types = types;
    const [type] = types;
    pokemon.mainType = type;
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
        .then(convertPokemonJsonToModel);
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const urlPokemon = `${baseUrl}/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(urlPokemon)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonsList) => pokemonsList.map(pokeApi.getPokemonDetail))
        .then((pokemonsUrlList) => Promise.all(pokemonsUrlList))
        .catch((error) => console.error(error))
}

pokeApi.getAllTypes = () => {
    const urlPokemon = `${baseUrl}/v2/type`;


    return fetch(urlPokemon)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}