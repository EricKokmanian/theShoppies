import {useState} from 'react';

export default function useMovieSearch() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  function searchByTitle(searchString) {
    setLoading(true);

    fetch('https://www.omdbapi.com/?s=' + searchString + '&apikey=a8600b0b')
      .then(res => res.json())
      .then((data) => {
        setResult(data.Search);
      })
      // TODO: Handle Errors
      .catch(console.log)
      .finally(() => setLoading(false)) 
  }

  return {
    result,
    loading,
    searchByTitle,
  } 
}