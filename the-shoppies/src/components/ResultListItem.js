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
                <label>&nbsp;({release})&nbsp;</label>
                <button disabled={isNominated} onClick={() => {handleOnNominate(id)}}>Nominate</button>
            </div>
        </li>
    )
}

export default ResultListItem;