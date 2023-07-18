import React from "react";
import { Link } from "react-router-dom";
//link eken wenne page eka refresh wenne nti wenna dana ekk

//bootstrap eke class kiyna eka className kiyla wens krnna
//custom style ekk dnwa nm double {{}} dla rka athule tmai liynna onee

function Header(){

    return(
        
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>  

        <li className="nav-item">
          <Link to="/add" className="nav-link active" aria-current="page">Create Student</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Header;