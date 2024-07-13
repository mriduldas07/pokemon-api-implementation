/* eslint-disable react/prop-types */
export default function Card({ data }) {
  const { name, sprites, weight, height } = data || {};
  return (
    <div className="w-80 bg-[#bfecff] rounded-2xl shadow-xl px-6 box-border flex">
      <div className="flex justify-center w-24 mx-auto">
        <img src={sprites.front_shiny} alt="" className="w-fit bg-cover" />
      </div>
      <div className="py-5">
        <h1 className="text-xl font-bold">{name}</h1>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
      </div>
    </div>
  );
}
