import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const LspuSCC = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/colleges/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="box1">
      {data &&
        Object.entries(data).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <div key={key} className="box2">
                <h3 id="college-title">{key}</h3>
                {value.map((item) => (
                  <div id="courses-name" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={key} id="school-name">
                <span>{key}: </span>
                <span>{value}</span>
              </div>
            );
          }
        })}
    </div>
  );
};
