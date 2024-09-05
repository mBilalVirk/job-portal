import React, { useState } from "react";
import jobs from "./job.jsx";

function Jobs() {
  const itemsPerPage = 5; // Number of jobs per page
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // Calculate the indexes of jobs to be displayed on the current page
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle next and previous page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {/* Your existing JSX code */}
      <section id="jobs">
        <div className="container">
          <h5>RECENT UPDATES</h5>
          {currentJobs.map((job, index) => (
            <div className="company-details" key={index}>
              <div className="job-update">
                <h4>{job.Title}</h4>
                <p>{job.Company}</p>
                {/* Display other job details */}
                <p>{job.Experience}</p>
                <p>{job.Salary}</p>
                <p>{job.Location}</p>
                {/* <p>
                  Skills: <small>{job.Skills}</small>
                </p> */}
                <p>Skills:</p>
                {/* Split skills by comma and render each in a separate <p> */}
                {job.Skills.split(",").map((skill, idx) => (
                  <small key={idx} className="skill">
                    {skill.trim()}
                  </small>
                ))}
                <p></p>
                <p>
                  Description:{" "}
                  <small>
                    {job.Description} <a href="#">Read More</a>
                  </small>
                </p>
              </div>
              <div className="apply-btn">
                <button className="btn btn-primary" type="button">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <ul className="page-link text-center">
        <li className="left-arrow" onClick={prevPage}>
          &#8592;
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <li className="right-arrow" onClick={nextPage}>
          &#8594;
        </li>
      </ul>
    </>
  );
}

export default Jobs;
