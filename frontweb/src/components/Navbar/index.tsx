import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md nabvar-dark bg-primary main-nav">
      <div className="container-fluid">
        <NavLink to="/" activeClassName="active" className="nav-logo-text">
          <h4>Carros Top</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carros-top-navbar"
          aria-controls="carros-top-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="carros-top-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
