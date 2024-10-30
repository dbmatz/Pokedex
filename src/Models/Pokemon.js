class Pokemon {
  id;
  order;
  name;
  types = [];
  mainType;
  image;
  species;
  attack;
  defense;

  constructor() {
    this.id = undefined;
    this.order = undefined;
    this.name = undefined;
    this.types = [];
    this.mainType = undefined;
    this.image = undefined;
    this.species = undefined;
    this.attack = undefined;
    this.defense = undefined;
  }
}

export default Pokemon;
