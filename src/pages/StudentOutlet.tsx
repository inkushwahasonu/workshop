import React from "react";
import { Outlet } from "react-router-dom";

const StudentOutlet: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default StudentOutlet;
