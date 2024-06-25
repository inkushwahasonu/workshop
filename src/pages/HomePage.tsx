import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <h2>Home Page</h2>

      <button title="students">
        <Link to="/student/">Student Details</Link>
      </button>

      <hr />
    </>
  );
};

export default HomePage;
