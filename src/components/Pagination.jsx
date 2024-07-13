/* eslint-disable react/prop-types */

export default function Pagination({ setUrl, prevUrl, nextUrl }) {
  return (
    <div className="flex justify-center items-center gap-10">
      <button
        className="text-xl rounded px-5 py-3 bg-red-300"
        onClick={() => setUrl(prevUrl)}
      >
        Previous
      </button>
      <button
        className="text-xl rounded px-5 py-3 bg-green-300"
        onClick={() => setUrl(nextUrl)}
      >
        Next
      </button>
    </div>
  );
}
