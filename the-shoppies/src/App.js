import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField, Card, Layout} from '@shopify/polaris';

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
    :  null
  ;

  function handleOnRemove (movieId) {
    setNominations(
      nominations.filter(nomination => nomination.imdbID !== movieId)
    );
  };

  function handleOnNominate (movieId) {
    if (nominations.length < 5)
      setNominations(nominations => [...nominations, moviesList.find(movie => movie.imdbID === movieId)]);
    else
      alert('Sorry, reached the maximum number of nominations !');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Shoppies
        </p>
      </header>
        {loader}
      <Layout>
        <Card className="Movie-search-bar" sectioned>
          <TextField 
            type="text"
            label="Search movies by title:"
            className="Search-box" 
            onBlur={() => searchByTitle(searchString)}
            value={searchString} 
            onChange={e => setSearchString(e)}></TextField>
        </Card>
      </Layout>
     
      <div className="Result-movie-list">
        <div className="Movie-list">
          {moviesList?.length > 0 ? 
          <>
            <h3>Results for 
              <i> '{searchString}' </i>:
            </h3>
            <ResultList list={moviesList} nominations={nominations} handleOnNominate={handleOnNominate}/>
          </> : <h3>No results yet. Start by searching a movie title...</h3>}
        </div>
        <div className="Nomination-list">
          <h3>Nominations</h3><br/><br/>
          {nominations.length > 0 ? 
            <NominationList nominations={nominations} handleOnRemove={handleOnRemove}/> 
            : <i>No nominations so far...</i>
          }
        </div>
      </div>
    </div>
  );
}
