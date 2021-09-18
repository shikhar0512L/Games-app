import React from 'react';
import {
  Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">About games</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item"><Link className="nav-link" to="/Ff">Free Fire</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Mine">MineCraft</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Bgmi">Bgmi</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Roblox">Roblox</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Call">Call of duty</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Coc">Clash of Clans</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Appex">Apex Legends</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Gta">Grand Theft Auto V</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Wcc">World Cricket Championship</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )  
}
