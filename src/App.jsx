import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SearchJobs from "./components/searchjob/SearchJobs";
import Jobs from "./components/jobs/Jobs";
import Companies from "./components/companies/companies";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <SearchJobs />

              <section id="recruiters">
                <div className="container text-center">
                  <h3>TOP RECRUITER</h3>
                </div>
              </section>

              <Jobs />
            </>
          }
        />

        {/* Companies Page */}
        <Route path="/companies" element={<Companies />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
