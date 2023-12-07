import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-outline-success"
                    style={{ color: "orange" }}
                    aria-current="page"
                    href="/welcome"
                  >
                    <strong>Acceuil</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-outline-success"
                    style={{ color: "orange" }}
                    href="/products"
                  >
                    <strong>Liste des Produits</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
