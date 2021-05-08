import React from 'react';
import '../App.css';

function NominationListItem({
    id,
    title,
    release,
    isNominated,
    handleOnRemove
}) {

    return (
        <li>
            <div className="Nomination-list-item">
            <label>{title}</label>
            <label> ({release})</label>
            <button disabled={isNominated} onClick={() => handleOnRemove(id)}>Remove</button>
        </div>
        </li>
    )
}

export default NominationListItem;