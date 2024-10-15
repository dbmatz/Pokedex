const pokemonListOl = document.getElementById(`pokemonList`);

pokeApi.getPokemons().then((pokemonList = []) => {
    const pokemonsLiList = pokemonList.map(convertPokemonToLi).join("");

     pokemonListOl.innerHTML += pokemonsLiList;
})

function generateTypeList(pokemonTypes){
return pokemonTypes.map((pokemonTypes) => `<li class="type ${pokemonTypes.type.name}">${pokemonTypes.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.types[0].type.name}">
                    <span class="number">#${String(pokemon.id).padStart(3, '0')}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${generateTypeList(pokemon.types).join("")}
                        </ol>
                        <img
                            src="${pokemon.sprites.other.dream_world.front_default}"
                            alt="${pokemon.name}">
                    </div>
                </li>`;
}