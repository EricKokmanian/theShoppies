import React from 'react';
import NominationListItem from './NominationListItem';
import '../App.css';

export default function NominationList ({
    nominations,
    handleOnRemove
}) {

    const nominationListContent = nominations?.length > 0 ? 
        nominations?.map(item => 
            <NominationListItem
                key={item.imdbID}
                id={item.imdbID}
                title={item.Title} 
                release={item.Year} 
                isNominated={item.isNominated}
                handleOnRemove={() => handleOnRemove(item.imdbID)}/>
        ) : null
    ;

    const nominationLimit = nominations?.length === 5 ?
            <i className="Limit-reached">Maximum number of nominations (5) has been reached!</i> : null
    ;
    
    return (
        <>
            {nominationLimit}
            <ul>
                {nominationListContent}
            </ul>
        </>
    );
}