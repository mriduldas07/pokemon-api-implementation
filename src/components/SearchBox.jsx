/* eslint-disable react/prop-types */
export default function SearchBox({ setSearch }) {
  return (
    <div>
      <h2 className="text-xl font-semibold py-3">Search for pokemon</h2>
      <input
        type="text"
        placeholder="Search for pokenmon..."
        className="w-1/3 h-10 ps-3"
        style={{ border: "3px solid #bfecff" }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
