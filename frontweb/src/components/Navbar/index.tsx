import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <a href="link">
          <h4>Carros Top</h4>
        </a>
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

        <div className="collapse navbar-collapse justify-content-end" id='carros-top-navbar'>
          <ul className="navbar-nav main-menu">
            <li>
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;