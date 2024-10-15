const pokemonListOl = document.getElementById(`pokemonList`);

pokeApi.getPokemons().then((pokemonList = []) => {
    console.log("pokemonList", pokemonList)
    const pokemonsLiList = pokemonList.map(convertPokemonToLi).join("");

     pokemonListOl.innerHTML += pokemonsLiList;
})

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.mainType}">
                    <span class="number">#${pokemon.id}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${pokemon.mainType}">${type}</li>`).join("")}
                        </ol>
                        <img
                            src="${pokemon.image}"
                            alt="${pokemon.name}">
                    </div>
                </li>`;
}