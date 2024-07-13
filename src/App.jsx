import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import { fetchPoke } from "./utils/fetch";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPoke(setLoading, url, setPokeData, setNextUrl, setPrevUrl);
  }, [url]);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold py-10">Pokemon world</h1>
      <div className="py-10">
        <SearchBox setSearch={setSearch} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {loading && <div className="">Loading...</div>}
        {pokeData
          ?.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          ?.map((item, i) => (
            <Card key={i} data={item} />
          ))}
      </div>
      <div className="py-10">
        <Pagination setUrl={setUrl} prevUrl={prevUrl} nextUrl={nextUrl} />
      </div>
    </div>
  );
}

export default App;
