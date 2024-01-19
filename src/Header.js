import React from "react";
import logo from "./images/logo-50.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ backgroundColor:'#284d28' }}>
      <div className="container-fluid mx-5">
        <div style={{ borderRadius: "50%", padding:"10px", backgroundColor:"#FFD700" }}>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 active" aria-current="page" href="#">
                Package Trip
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Day Trip
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link mx-2 dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trip Types
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Sightseeing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cruises
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Package Tour
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
