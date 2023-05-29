import axios from "axios";
import React, { useEffect, useState } from "react";

function DistTest(props) {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/dist/${props.townName}`
        );
        setCollegeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDistance();
  }, [props.townName]);

  return (
    <div>
      <h1>Dist Test</h1>
      {collegeData.map((college) => (
        <div key={college._id}>
          <p>Name: {college.name}</p>
          <p>
            Distance of {college.name} to {props.townName}:{" "}
            {college[props.townName]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DistTest;
