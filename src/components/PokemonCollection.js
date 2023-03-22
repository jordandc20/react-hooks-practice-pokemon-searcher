import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {

  const pokemon = pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {pokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
