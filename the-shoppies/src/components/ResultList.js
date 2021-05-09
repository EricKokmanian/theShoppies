import React from 'react';
import ResultListItem from './ResultListItem';
import '../App.css';

function ResultList ({
    list,
    nominations,
    handleOnNominate
}) {

    function checkIfNominated (movieId) {
        if (nominations.length > 0) 
            return nominations.find(movie => movie.imdbID === movieId) !== undefined;
        else
            return false;
    };

    const listContent = list?.length > 0 ? 
        list.map(item => 
            <ResultListItem
                key={item.imdbID}
                id={item.imdbID}
                title={item.Title} 
                release={item.Year}
                isNominated={checkIfNominated(item.imdbID)}
                handleOnNominate={() => handleOnNominate(item.imdbID)} />
        ) : null
    ;

    return (
        <ul>
            {listContent}
        </ul>
    );
}

export default ResultList;