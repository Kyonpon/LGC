import React, { useState, useEffect } from "react";
import axios from "axios";

function GetCourses(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/colleges/getByName/${props.collegeName}`
        );
        const college = response.data;
        const department = college[props.departmentName];
        const departmentName = props.departmentName.toUpperCase();
        const courses = department.map((courseName) => ({ name: courseName }));
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, [props.collegeName, props.departmentName]);

  return (
    <div className=" p-2 m-1">
      <h2 className="bg-success">
        {props.collegeName} - {props.departmentName.toUpperCase()} Courses
      </h2>
      <section className="d-flex ">
        {courses.map((course) => (
          <div
            key={course.name}
            className="text-light bg-dark m-2 p-2 text-center"
          >
            {course.name}
          </div>
        ))}
      </section>
    </div>
  );
}

export default GetCourses;
