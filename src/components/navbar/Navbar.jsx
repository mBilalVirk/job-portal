import React from "react";

function Navbar() {
  return (
    <section id="header  ">
      <div className="menu-bar ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              DAILY JOBS ALERTS
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    ALL JOBS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    COMPANIES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WALK-IN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    GOVT. JOBS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    INTERSHIP
                  </a>
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
      <div className="banner text-center ">
        <h1>JOBS AROUND YOU</h1>
        <p>Subsribe Jobs portal for new updates</p>
      </div>
    </section>
  );
}

export default Navbar;
