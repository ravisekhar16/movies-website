import React from 'react'
import "./styles/Header.css"
const Header = ({searchTerm,setSearchTerm}) => {
  return (
    <header>
        <div className='logo'>
            <h1>MOVIES</h1>
        </div>
        <div className='header-controls'>

            <input type="text" placeholder='search movies...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    </header>
)
}

export default Header