import React from "react";

function SearchJobs() {
  return (
    <div className="search-job text-center ">
      <input
        type="text"
        name="keyWord"
        className="form-control"
        placeholder="Search Keywords"
      />
      <input
        type="text"
        name="keyWord"
        className="form-control"
        placeholder="Company"
      />
      <input
        type="text"
        name="keyWord"
        className="form-control"
        placeholder="Location"
      />
      <input
        type="button"
        defaultValue="Find Job"
        className="btn btn-primary"
      />
    </div>
  );
}

export default SearchJobs;
