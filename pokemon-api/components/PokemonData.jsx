import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";
export const PokemonData = ({ pokemon }) => {
  const capitalizedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-black text-4xl font-bold text-center font-karla drop-shadow-text">
        {capitalizedName}
      </h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        width={300}
        height={300}
        className="mx-auto"
        alt={`${pokemon.name} official artwork front image`}
      />
      <div className="flex justify-between items-center flex-wrap gap-4">
        <span className="bg-white rounded-full w-12 h-12 flex justify-center items-center text-black  drop-shadow-lg">
          {pokemon.id}
        </span>
        <div className="flex gap-4 ">
          {pokemon.types.map((typeObj, i) => (
            <PokemonType name={typeObj.type.name} key={i} />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-3xl font-karla">Abilities</h3>
        {pokemon.abilities
          .map(
            (abilityObj) =>
              `${
                abilityObj.ability.name[0].toUpperCase() +
                abilityObj.ability.name.slice(1)
              }`
          )
          .join(" - ")}
      </div>
      <div className="bg-white rounded-lg p-4">
        <h3 className=" font-karla">Default Defeat Experience</h3>
        <span className="font-bold font-karla">{pokemon.base_experience}</span>
        <h3 className=" font-karla">Amount of Moves</h3>
        <span className="font-bold font-karla">{pokemon.moves.length}</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {pokemon.stats.map((statsObj, i) => (
          <PokemonStat
            statName={statsObj.stat.name}
            key={i}
            value={statsObj.base_stat}
          />
        ))}
      </div>
    </div>
  );
};
