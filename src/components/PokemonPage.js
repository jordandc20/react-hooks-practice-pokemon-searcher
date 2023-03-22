import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    fetch('  http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(data => {
        setPokemonList(data)
      })
  }, [])

  const filteredPoke = pokemonList.filter(poke => filterString === '' || poke.name.toLowerCase().match(filterString.toLowerCase()))

  function addPokemon(newPoke) {
    console.log(newPoke)
    setPokemonList([...pokemonList, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNew={addPokemon} />
      <br />
      <Search onFilter={setFilterString} />
      <br />
      <PokemonCollection pokemonList={filteredPoke} />
    </Container>
  );
}

export default PokemonPage;
