import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { getAllPokemons } from "../api/pokemon";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function loadPokemon() {
      const { data } = await getAllPokemons();

      setPokemon(data.results);
    }
    loadPokemon();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 place-items-center gap-y-7">
        {pokemon.map((item, index) => (
          <Card key={index} pokemon={item} id={item.id} />
        ))}
      </div>
    </>
  );
};