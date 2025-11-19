import React from "react";
import { Link } from "react-router-dom";
const sigup = () => {
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
          maxWidth: "400px",
          borderRadius: "12px",
        }}
      >
        <h3 className="mb-4 text-center">SignUp</h3>
        <form action="">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Re-Enter Password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mb-3"
              style={{ backgroundColor: "#6C63FF", border: "none" }}
            >
              Sign Up
            </button>
            <p className="text-center" style={{ fontSize: "14px" }}>
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{ color: "#6C63FF", fontWeight: "500" }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default sigup;
