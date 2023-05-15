import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/GetCourses.css";

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
    <div className="pb-2 m-1 bg-courses-cont">
      <h2 className="bg-dept text-light">
        {props.collegeName} - {props.departmentName.toUpperCase()} Courses
      </h2>
      <section className="d-flex ">
        {courses.map((course) => (
          <div
            key={course.name}
            className="text-light bg-course-name m-1 p-2 text-center rounded"
          >
            {course.name}
          </div>
        ))}
      </section>
    </div>
  );
}

export default GetCourses;
