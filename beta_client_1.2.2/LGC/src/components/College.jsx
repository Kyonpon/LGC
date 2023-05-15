import React, { useState, useEffect } from "react";
import axios from "axios";

function College(props) {
  const [college, setCollege] = useState({});

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/colleges/getByName/${props.collegeName}`
        );
        setCollege(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollege();
  }, [props.collegeName]);

  return <h1 className="text-light">{college.name}</h1>;
}

export default College;
