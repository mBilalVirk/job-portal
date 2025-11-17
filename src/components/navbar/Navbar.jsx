import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section id="header">
      <div className="menu-bar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              DAILY JOBS ALERTS
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    ALL JOBS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/companies">
                    COMPANIES
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/walkin">
                    WALK-IN
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/govtjobs">
                    GOVT. JOBS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/internships">
                    INTERNSHIP
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    SIGN IN
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
