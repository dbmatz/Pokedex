const pokemonListOl = document.getElementById(`pokemonList`);

pokeApi.getPokemons().then((pokemonList = []) => {
    for (let i = 0; i < pokemonList.length; i++) {
        const element = pokemonList[i];
        let pokemonInfo;
        pokeApi.getPokemonInfo(element.url).then((pokemonInfo) => {
            pokemonInfo = convertPokemonToLi(pokemonInfo);
            pokemonListOl.innerHTML += pokemonInfo;
        })
    }

})

// pokeApi.getPokemonInfo(1).then((response) => {
//     console.log("response" ,response)
//     const pokemon = convertPokemonToLi(response);

//     pokemonListOl.innerHTML += pokemon;
// });

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.types[0].type.name}">
                    <span class="number">#${String(pokemon.id).padStart(3, '0')}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</li>
                            ${pokemon.types[1] ? `<li class="type ${pokemon.types[0].type.name}">${pokemon.types[1].type.name}</li>` : ''}
                        </ol>
                        <img
                            src="${pokemon.sprites.other.dream_world.front_default}"
                            alt="${pokemon.name}">
                    </div>
                </li>`;
}

