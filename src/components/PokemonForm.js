import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNew }) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [spriteFront, setSpriteFront] = useState('')
  const [spriteBack, setSpriteBack] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name,
      hp,
      sprites: {
        front: spriteFront,
        back: spriteBack
      }
    }
    console.log(formData)

    const fetchParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:3001/pokemon', fetchParameters)
      .then(resp => resp.json())
      .then(data => onAddNew(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setSpriteFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setSpriteBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
