import { useState } from "react";
import "./App.css";
import "./css/global.css";
import "./css/pokedex.css"
import { TypeCard } from "./Components/TypeCard";
import PokemonCard from "./Components/PokemonCard";

function App() {

  return (
    <>
      <section className="content">
        <h1>Pokedex</h1>

        <div className="pokemonTypes">
          <ul id="pokemonsTypesList">
          <TypeCard />
            <li id="loadingTypeList">
              <img src="/img/kOnzy.gif" alt="loading" />
            </li>
          </ul>
        </div>

        <ol className="pokemons" id="pokemonList">
          <PokemonCard />
          <li id="loadingTypeList">
            <img src="/img/kOnzy.gif" alt="loading" />
          </li>
        </ol>

        <div className="pagination">
          <button id="loadMoreButton" className="loadMore" type="button">
            +
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
