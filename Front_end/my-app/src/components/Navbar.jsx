import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div>      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href=" ">Blog Horizon</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-4 mb-md-4">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="" ><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=""><Link to="/Food" style={{ color: "white", textDecoration: "none" }}>Food</Link></a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=""><Link to="/Travel" style={{ color: "white", textDecoration: "none" }}>Travel</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active"href=""><Link to="/Relationship" style={{ color: "white", textDecoration: "none" }}>Relationship</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active"href=""><Link to="/Pets" style={{ color: "white", textDecoration: "none" }}>Pets</Link></a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        </div>


    </>
  );
}

export default Navbar;
