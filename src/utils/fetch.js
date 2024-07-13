export const getPoke = (result, setPokeData) => {
  result.map(async (item) => {
    const res = await fetch(item.url);
    const data = await res.json();
    setPokeData((state) => {
      return [...state, data];
    });
  });
};

export const fetchPoke = async (
  setLoading,
  url,
  setPokeData,
  setNextUrl,
  setPrevUrl
) => {
  setLoading(true);
  const res = await fetch(url);
  const data = await res.json();
  getPoke(data.results, setPokeData);
  setNextUrl(data.next);
  setPrevUrl(data.previous);
  setLoading(false);
};
