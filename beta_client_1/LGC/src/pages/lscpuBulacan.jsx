import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const LspuBULACAN = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/colleges/645c5bb22f6c399049c24f40")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data &&
        Object.entries(data).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <div key={key}>
                <h3>{key}</h3>
                {value.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={key}>
                <span>{key}: </span>
                <span>{value}</span>
              </div>
            );
          }
        })}
    </div>
  );
};
