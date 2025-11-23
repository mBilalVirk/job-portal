import React from "react";
import { useNavigate } from "react-router-dom";
const Profilebuilder = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
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
          maxWidth: "900px", // ⬅⬅ WIDE WIDTH
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          Profile Builder
        </h3>
        <button
          type="button"
          style={{
            display: "flex",
            margin: "auto",
            marginRight: "0",
            backgroundColor: "#6C63FF",
            color: "white",
          }}
          className="btn bt-primary mb-4"
          onClick={goToHome}
        >
          Home
        </button>
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

            <div className="row">
              {/* Name */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="name"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter full name"
                  required
                />
              </div>

              {/* Father Name */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="fname"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Father Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="form-control"
                  placeholder="Enter father name"
                  required
                />
              </div>

              {/* DOB */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="dob"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Date of Birth
                </label>
                <input type="date" id="dob" className="form-control" required />
              </div>

              {/* Gender */}
              <div className="mb-3 col-md-6">
                <label style={{ fontSize: "14px", color: "#444" }}>
                  Gender
                </label>
                <select className="form-control" required>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* CNIC */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="cnic"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  CNIC
                </label>
                <input
                  type="text"
                  id="cnic"
                  className="form-control"
                  placeholder="12345-1234567-1"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="phone"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="03xx-xxxxxxx"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="email"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              {/* City */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="city"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Enter city"
                />
              </div>

              {/* Country */}
              <div className="mb-3 col-md-6">
                <label
                  htmlFor="country"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="form-control"
                  placeholder="Enter country"
                />
              </div>

              {/* Address */}
              <div className="mb-3 col-12">
                <label
                  htmlFor="address"
                  style={{ fontSize: "14px", color: "#444" }}
                >
                  Address
                </label>
                <textarea
                  id="address"
                  className="form-control"
                  placeholder="Enter full address"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
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
