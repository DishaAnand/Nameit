import React, { Component } from 'react'
import './Searchbox.css'

const SearchBox=({onInputChange})=>{
    return(
        <div className="search-container">
            <input 
            onChange={(event)=>onInputChange(event.target.value)}
            placeholder="Type keywords" 
            className="search-input"/>

        </div>
    )
}



export default SearchBox
