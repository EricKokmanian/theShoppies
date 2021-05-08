import React from 'react';
import ResultListItem from './ResultListItem';
import '../App.css';

function ResultList ({
    list,
    handleOnNominate
}) {
    const listContent = list?.length > 0 ? 
        list.map(item => 
            <ResultListItem
                key={item.imdbID}
                id={item.imdbID}
                title={item.Title} 
                release={item.Year}
                handleOnNominate={() => handleOnNominate(item.imdbID)} />
        ) : null;

    return (
        <ul>
            {listContent}
        </ul>
    );
}

export default ResultList;