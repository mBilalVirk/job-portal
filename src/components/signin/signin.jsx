import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
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
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          Sign In
        </h3>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username or Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ backgroundColor: "#6C63FF", border: "none" }}
          >
            Sign In
          </button>

          <p className="text-center" style={{ fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#6C63FF", fontWeight: "500" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
