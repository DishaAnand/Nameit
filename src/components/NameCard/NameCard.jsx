import React from 'react'
import './NameCard.css'

const nameCheapURL='https://www.namecheap.com/domains/registration/results/?domain=%27%3B'
const NameCard=({suggestedName})=>{
    return (
        <a className="card" href={`${nameCheapURL}${suggestedName}`}>
        <div className="result-name">
            <p className="result">{suggestedName}</p>
        </div>
        </a>
    );
};
export default NameCard;