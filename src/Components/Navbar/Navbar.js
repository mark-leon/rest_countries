import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../Context/Themecontext'
import {Link, useHistory} from "react-router-dom"

const Navbar = () => {
  const {theme,toggle,dark} = useContext(ThemeContext)
  const titleInputRef = useRef();
  let history = useHistory();
  const handleChange = e => {
  e.preventDefault();
  const enteredTitle = titleInputRef.current.value;
  history.push(`/${enteredTitle}`)
  }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
  <Link className="navbar-brand" to="/">Where in the world?</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" style= {{backgroundColor:"#007bff"}}></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto"></ul>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter by region
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to = "/region/Africa">Africa</Link>
          <Link className="dropdown-item" to = "/region/Americas">America</Link>
          <Link className="dropdown-item" to = "/region/Asia">Asia</Link>
          <Link className="dropdown-item" to = "/region/Europe">Europe</Link>
          <Link className="dropdown-item" to = "/region/Oceania">Oceania</Link>
        </div>
      </li>
    <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            marginRight:"20px",
            height:"34px"
          }} 
        ><i class="fas fa-moon"></i>
      {/* Toggle to {!dark ? 'Dark' : 'Light'} theme */}
        Dark Mode</button>
    <form className="form-inline my-2 my-lg-0" onSubmit={handleChange}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  ref={titleInputRef} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
   
  </div>
</nav>
        </div>
    )
}

export default Navbar
