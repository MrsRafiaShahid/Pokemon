const PokemonModal = ({ selectedPokemon, setShowModal }) => {
  return (
    <>
      <div className="bg-white pokemon-modal  overflow-y-auto rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500  hover:text-black"
        >
          X
        </button>
        <div className="p-6 overflow-y-auto">
          <figure className="flex justify-center drop-shadow-2xl z-100 drop-shadow-[#32325d40]">
            <img
              src={selectedPokemon?.sprites?.other?.dream_world?.front_default}
              alt={selectedPokemon?.name}
              className="w-1/2 min-h-24 z-100 object-contain"
            />
          </figure>
          <h2 className="text-2xl  mt-6 font-bold capitalize mb-4 z-100 text-center">
            {selectedPokemon?.name}
          </h2>
          <div className="flex justify-center  items-center mx-2.5">
            <p className="z-100 font-bold capitalize bg-green-400 rounded-3xl px-2.5 py-1.5 mt-5 text-white">
              {(selectedPokemon?.types || [])
                .map((curType) => curType.type.name)
                .join(",")}
            </p>
          </div>
          <div className="space-y-2 mt-5 grid grid-cols-2 gap-2 text-center">
            <p className=" flex justify-center items-center gap-2 text-center  px-2 py-2 bg-fuchsia-300 rounded-3xl font-bold  text-violet-600">
              Height:<span>{selectedPokemon?.height ?? ""}</span>
            </p>
            <p
              className="
            flex justify-center items-center gap-2 text-center  px-2 py-2  bg-cyan-300 rounded-3xl font-bold "
            >
              Weight:<span>{selectedPokemon?.weight ?? ""}</span>
            </p>
            <p className=" flex justify-center items-center  gap-2 text-center  px-2 py-2  bg-rose-300 rounded-3xl font-bold text-cyan-700">
              <strong>Speed:</strong>
              <span>{selectedPokemon?.stats?.[5]?.base_stat ?? ""}</span>
            </p>
            <p className=" flex justify-center items-center  gap-2 text-center  px-2 py-2  bg-red-300 rounded-3xl font-bold text-cyan-500">
              <strong>Defence:</strong>
              <span>{selectedPokemon?.stats?.[2]?.base_stat ?? ""}</span>
            </p>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 mt-5 space-y-3 text-center">
            <p className="flex justify-center items-center gap-2 w-[130px] md:w-full px-2 py-2   bg-blue-300 rounded-3xl text-center font-bold text-emerald-800">
              <strong>Experience:</strong>
              <span> {selectedPokemon?.base_experience ?? ""}</span>
            </p>

            <p className="flex justify-center items-center gap-2 w-[130px] md:w-full px-2 py-2   text-center font-bold bg-indigo-300 rounded-3xl text-teal-600">
              <strong>Attack:</strong>
              <span>{selectedPokemon?.stats?.[1]?.base_stat ?? ""}</span>
            </p>

            <p className="flex justify-center items-center gap-2 w-[150px] md:w-full px-2 py-2  text-center font-bold bg-violet-400 rounded-3xl text-sky-900">
              <strong>Abilities:</strong>
              <span>
                {(selectedPokemon?.abilities || [])
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .slice(0, 1)
                  .join(",")}
                <br />
              </span>
            </p>
            <p className="flex justify-center items-center gap-2 w-[150px] md:w-full px-2 py-2  text-center font-bold bg-violet-400 rounded-3xl text-sky-900">
              <strong>Move:</strong>
              <span>
                {selectedPokemon?.moves?.[0]?.move?.name ?? ""}
                <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonModal;
