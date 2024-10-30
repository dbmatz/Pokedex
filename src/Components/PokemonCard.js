import React, { useEffect, useState } from "react";
import { convertPokemonJsonToModel } from "../Utils/ConvertPokemonJsonToModel";

const baseUrl = "https://pokeapi.co/api";

function PokemonCard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async (offset = 0, limit = 5) => {
      const urlPokemon = `${baseUrl}/v2/pokemon?offset=${offset}&limit=${limit}`;

      try {
        const response = await fetch(urlPokemon);
        const jsonBody = await response.json();
        const pokemonsList = jsonBody.results;
        const pokemonsDetailPromises = pokemonsList.map((pokemon) =>
          fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokemonJsonToModel)
        );
        const pokemonsDetails = await Promise.all(pokemonsDetailPromises);
        setPokemons(pokemonsDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id} className={`pokemon ${pokemon.mainType}`}>
          <span className="number">{pokemon.id}</span>
          <span className="number">{pokemon.id}</span>
          <span className="name">{pokemon.name}</span>

          <div className="detail">
            <ol className="types">
              {pokemon.types.map((type) => (
                <li className={`type ${pokemon.mainType}`} key={type}>{type}</li>
              ))}
            </ol>
            <img src={`${pokemon.image}`} alt={`${pokemon.name}`} />
          </div>
        </li>
      ))}
    </>
  );
}

export default PokemonCard;
