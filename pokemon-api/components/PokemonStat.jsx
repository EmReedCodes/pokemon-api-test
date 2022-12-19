export const PokemonStat = ({ statName, value }) => {
  const name = statName[0].toUpperCase() + statName.slice(1);
  return (
    <div className="bg-white flex-1 p-4 rounded-lg h-fit flex flex-col items-center">
      <span className=" h-12 w-12 border-4 border-black rounded-full flex justify-center items-center font-karla font-bold">
        {value}
      </span>
      <span className="font-karla font-bold w-max">{name}</span>
    </div>
  );
};
