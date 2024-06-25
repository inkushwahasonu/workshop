import React, { useEffect, useState } from "react";
import { IStudent } from "../interface/student";
import { Link } from "react-router-dom";

import "./Students.scss";

const Students: React.FC = () => {
  const [allStudents, setAllStudents] = useState<IStudent[]>();
  useEffect(() => {
    const students: IStudent[] | undefined = JSON.parse(
      localStorage.getItem("students") as string
    );
    console.log(students);

    setAllStudents(students);
  }, []);

  const handleUpdate = () => {};

  return (
    <>
      <button title="Create Student" className="create_button">
        <Link to="/student/create-student">Create Student</Link>
      </button>

      <br />
      <hr />
      <table>
        <thead>
          <tr>
            <td>SN.</td>
            <td>Name</td>
            <td>Age</td>
            <td>Phone Number</td>
            <td>Email ID</td>
          </tr>
        </thead>
        <tbody>
          {allStudents?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button>
                    <Link to={`/student/update-student/${item._id}`}>
                      Update
                    </Link>
                  </button>
                </td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Students;
