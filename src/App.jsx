import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SearchJobs from "./components/searchjob/SearchJobs";
import Jobs from "./components/jobs/Jobs";
import Companies from "./components/companies/companies";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactus/contactus";
import Signin from "./components/signin/signin";
import "./App.css";

function Layout({ children }) {
  const location = useLocation();

  // hide navbar & footer only on /signin page
  const hideLayout = location.pathname === "/signin";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div className="banner text-center">
                  <h1>JOBS AROUND YOU</h1>
                  <p>Subscribe Jobs portal for new updates</p>
                </div>

                <SearchJobs />
                <Jobs />
              </>
            }
          />

          <Route path="/companies" element={<Companies />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* Signin Page — only Signin appears */}
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
