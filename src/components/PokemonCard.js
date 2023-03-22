import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const { name, hp, sprites } = pokemon
  const [pokeImage, setPokeImage] = useState(true)

  const handleClick = () => {
    setPokeImage(pokeImage => !pokeImage)
  }

  const imageDisplay = pokeImage ? sprites.front : sprites.back

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={imageDisplay} onClick={handleClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
