import React from 'react';
import '../App.css';

function NominationListItem({
    id,
    title,
    release,
    handleOnRemove
}) {

    return (
        <li>
            <div className="Nomination-list-item">
            <label>{title}</label>
            <label>&nbsp;({release})&nbsp;</label>
            <button onClick={() => handleOnRemove(id)}>Remove</button>
        </div>
        </li>
    )
}

export default NominationListItem;