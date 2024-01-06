import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchJobs from "./components/searchjob/SearchJobs";
import Jobs from "./components/jobs/Jobs";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SearchJobs />
      <section id="recruiters">
        <div className="container text-center">
          <h3>TOP RECRUITER</h3>
        </div>
      </section>
      <Jobs />
    </>
  );
}

export default App;
