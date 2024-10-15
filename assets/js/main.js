const pokemonListOl = document.getElementById(`pokemonList`);
const loadMoreButton = document.getElementById(`loadMoreButton`);

const maxRecords = 1302;
const limit = 5;
let offset = 0;

loadMorePokemons(offset, limit);

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

function loadMorePokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        console.log("pokemonList", pokemonList)
        const pokemonsLiList = pokemonList.map(convertPokemonToLi).join("");
    
         pokemonListOl.innerHTML += pokemonsLiList;
    })
}

loadMoreButton?.addEventListener('click', () => {
    offset+= limit;

    const qtdRecordsNextPage = offset + limit;
    if(qtdRecordsNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadMorePokemons(offset, newLimit);
        loadMoreButton.style.display = 'none';
        return;
    }

    loadMorePokemons(offset, limit);
});