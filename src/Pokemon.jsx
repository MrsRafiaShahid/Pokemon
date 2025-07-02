import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import PokemonModal from "./PokemonModal";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const fetchPokemon = async () => {
    try {
      const res = await axios.get(API);
      const results = res.data.results;
      console.log(results);
      const detailDataPokemon = results.map(async (curPokemon) => {
        const detailRes = await axios.get(curPokemon.url);
        console.log(detailRes)
        return detailRes.data;
      });

      const detailDataResponse = await Promise.all(detailDataPokemon);
      setPokemon(detailDataResponse);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className=" min-w-full flex flex-col justify-center items-center">
        <header className="md:mx-14 mx-8 ">
          <h1 className="md:text-6xl text-3xl font-bold text-teal-700 text-center capitalize mt-4">
            Explore Pokemon
          </h1>
        </header>
        <div className="pokemon-search w-1/2 mx-2 md:w-full flex justify-center mb-10 mt-8">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="outline-none appearance-none w-2xl border-b-2 border-b-blue-400 p-3.5 text-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="container relative">
          <div className="w-full m-3 p-4">
            <ul className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8  px-4 py-6 ">
              {searchData.map((curPokemon) => {
                return (
                  <PokemonCards
                    key={curPokemon.id}
                    pokemonData={curPokemon}
                    onClick={() => {
                      setShowModal(true);
                      setSelectedPokemon(curPokemon);
                      setTimeout(() => {
                        const modal = document.getElementById(
                          "pokemon-detail-modal"
                        );
                        if (modal)
                          modal.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                      }, 100);
                    }}
                  />
                );
              })}
            </ul>
          </div>
          {showModal && selectedPokemon && (
            <div
              id="pokemon-detail-modal"
              className="
   fixed z-50 inset-0 flex justify-center bg-black/40 backdrop-blur-sm p-4"
            >
              <PokemonModal
              setShowModal={setShowModal}
              selectedPokemon={selectedPokemon}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Pokemon;
