import React from 'react';
import brand from '../img/meong.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={brand} alt="" width="30" height="24" />
            KuncayFilm21
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Daftar
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/" className="dropdown-item">Action</Link></li>
                  <li><Link to="/" className="dropdown-item">Drama</Link></li>
                  <li><Link to="/pengajian" className="dropdown-item">Pengajian</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ml-auto">
              <input className="form-control me-2" type="search" placeholder="Cari Judul atau Genre...." aria-label="Search" />
              <button className="btn btn-outline-" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;