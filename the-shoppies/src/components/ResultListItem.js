import React from 'react';
import '../App.css';

function ResultListItem ({
    id,
    title,
    release,
    isNominated,
    handleOnNominate
}) {

    return (
        <li>
            <div className="Movie-list-item">
                <label>{title}</label>
                <label> ({release})</label>
                <label>{isNominated}</label>
                <button onClick={() => {handleOnNominate(id)}}>Nominate</button>
            </div>
        </li>
        // Display Nominate or Remove using isNominated
    )
}

export default ResultListItem;