import axios from "axios";
import { useEffect, useState } from "react";
import { getColor } from "../helpers/colors";
import { TypePk } from "./TypePk";
import { getPokemon } from "../api/pokemon";

export const Card = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon(url);
        const data = response.data;
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];

  if (!pokemonData) {
    return;
  }

  const frontDefault = pokemonData.sprites?.other?.dream_world?.front_default;
  const types = pokemonData.types.map((type) => type.type.name);

  return (
    <>
        <div
          className={`w-[300px] h-[120px] rounded-lg flex items-center justify-between gap-5 p-3`}
          style={{ background: getColor(types[0]) }}
        >
          <div>
            <span className="font-black">#{id}</span>
            <h3 className="text-3xl text-white font-bold">{name}</h3>
            <div className="flex items-center gap-2 mt-2">
              {types.map((type) => (
                <TypePk key={type} type={type} />
              ))}
            </div>
          </div>

          {frontDefault && (
            <img
              className="w-[110px] h-[115px]"
              src={frontDefault}
              alt={`Pokemon ${name}`}
            />
          )}
        </div>
    </>
  );
};
