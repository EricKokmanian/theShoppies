import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import ResultList from './components/ResultList';
import useMovieSearch from './hooks/useMovieSearch';
import NominationList from './components/NominationList';

export default function App () {
  const [searchString, setSearchString] = useState("");
  const [nominations, setNominations] = useState([]);
  const {
    loading, 
    searchByTitle,
    result: moviesList,
  } = useMovieSearch(searchString);

  const loader = loading ? 
    <p>Loading.....</p> 
    :  null;

  function handleOnRemove (movieId) {
    setNominations(
      nominations.filter(nomination => nomination.imdbID !== movieId)
    );
  };

  function handleOnNominate (movieId) {
    setNominations(nominations => [...nominations, moviesList.find(movie => movie.imdbID === movieId)])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Shoppies
        </p>
      </header>
        {loader}
      <div className="Movie-search-bar">
        <label>
          Movie title : 
          <input 
            type="text"
            className="Search-box" 
            onBlur={() => searchByTitle(searchString)}
            value={searchString} 
            onChange={e => setSearchString(e.target.value)} 
            />
        </label>
      </div>
      <div className="Result-movie-list">
        <div className="Movie-list">
          <h3>Results for 
            <i> '{searchString}' : </i>
          </h3>
          <ResultList list={moviesList} handleOnNominate={handleOnNominate}/>
        </div>
        <div className="Nomination-list">
          <h3>Nominations</h3><br/><br/>
          <i>No nominations so far</i>
          <NominationList nominations={nominations} handleOnRemove={handleOnRemove}/>
        </div>
      </div>
    </div>
  );
}
