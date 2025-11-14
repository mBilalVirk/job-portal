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
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* ALL JOBS PAGE */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    ALL JOBS
                  </Link>
                </li>

                {/* COMPANIES PAGE */}
                <li className="nav-item">
                  <Link className="nav-link" to="/companies">
                    COMPANIES
                  </Link>
                </li>

                {/* WALK-IN PAGE */}
                <li className="nav-item">
                  <Link className="nav-link" to="/walkin">
                    WALK-IN
                  </Link>
                </li>

                {/* GOVT JOBS PAGE */}
                <li className="nav-item">
                  <Link className="nav-link" to="/govtjobs">
                    GOVT. JOBS
                  </Link>
                </li>

                {/* INTERNSHIP PAGE */}
                <li className="nav-item">
                  <Link className="nav-link" to="/internships">
                    INTERNSHIP
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="banner text-center">
        <h1>JOBS AROUND YOU</h1>
        <p>Subscribe Jobs portal for new updates</p>
      </div>
    </section>
  );
}

export default Navbar;
