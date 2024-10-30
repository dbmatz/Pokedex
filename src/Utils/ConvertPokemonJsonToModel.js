import Pokemon from "../Models/Pokemon";

export function convertPokemonJsonToModel(pokemonDetail) {
  const pokemon = new Pokemon();
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