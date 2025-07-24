import React from 'react'
import "./header.css"
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';



function Header() {
  return (
    <header
    id = "header"
    className="header fixed-top d-flex align-items-center ps-3"
    >
        {/*{logo} */}
        <Logo/>
         {/*{search bar} */}
         <SearchBar/>
          {/*{nav} */}
          <Nav/>
          <div className="ms-auto me-3">
    
      </div>
          
        </header>
  )
}

export default Header