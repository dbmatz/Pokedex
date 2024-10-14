
pokeApi.getPokemons().then((pokemonList = []) => {
    const pokemonListOl = document.getElementById(`pokemonList`);
    console.log(pokemonList)

    pokemonListOl.innerHTML += pokemonList.map(convertPokemonToLi).join('');
})

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                    <span class="number">#001</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">Grass</li>
                            <li class="type">Poison</li>
                        </ol>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                            alt="${pokemon.name}">
                    </div>
                </li>`;
}

