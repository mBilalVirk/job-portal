import React from "react";

const Profilebuilder = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="shadow p-4"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          Profile Builder
        </h3>

        <form id="profile-form">
          <fieldset
            style={{
              border: "2px solid #6C63FF",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <legend
              style={{
                backgroundColor: "#6C63FF",
                color: "white",
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Personal Information
            </legend>

            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" style={{ fontSize: "14px", color: "#444" }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* CNIC */}
            <div className="mb-3">
              <label htmlFor="cnic" style={{ fontSize: "14px", color: "#444" }}>
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                className="form-control"
                placeholder="Enter CNIC"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#6C63FF", border: "none" }}
            >
              Save Profile
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profilebuilder;
