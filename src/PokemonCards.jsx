import React from "react";

const PokemonCards = ({ pokemonData ,onClick}) => {
  return (
    <>
        <li className=" pokemon-card min-w-1/2 md:w-[20rem] md:min-h-[12rem] mx-5 pb-4"  onClick={onClick}>
          {
            <figure className="flex justify-center drop-shadow-2xl drop-shadow-[#32325d40]">
              <img
                src={pokemonData?.sprites?.other?.dream_world?.front_default}
                alt={pokemonData?.name}
                className="w-1/2 h-15 z-100"
              />
            </figure>
          }
          <h1 className="text-3xl text-center capitalize mt-20">{pokemonData.name}</h1>
          <div className=" flex justify-center items-center mx-2.5 ">
            <p className="py-2.5 px-6  mt-2 bg-green-600 rounded-3xl text-white font-bold capitalize">
              {pokemonData.types.map((curType) => curType.type.name).join(",")}
            </p>
          </div>
        </li>
    </>
  );
};

export default PokemonCards;
