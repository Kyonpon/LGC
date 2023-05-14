import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Axios from "axios";
import "./App.css";

function App() {
  //1
  const [colleges, setColleges] = useState([]);
  const [currentCollege, setCurrentCollege] = useState({});

  //2
  useEffect(() => {
    getColleges();
  }, []);

  //3
  const getColleges = () => {
    Axios.get("http://localhost:3001/colleges/getall").then((response) => {
      console.log(response);
      setColleges(response.data);
    });
  };

  //4
  const handleCollegeClick = (college) => {
    setCurrentCollege(college);
  };

  //5
  const collegeList = colleges.map((college) => {
    return (
      <div
        key={college._id}
        onClick={() => handleCollegeClick(college)}
        className={`college ${
          currentCollege._id === college._id ? "active" : ""
        }`}
      >
        <h2>{college.name}</h2>
      </div>
    );
  });

  return (
    <>
      <div>
        <h1>AXIOS TESTING</h1>
        {/* 6 */}
        <div className="college-list">{collegeList}</div>
        {/* 7 */}
        <div className="current-college">
          <h2>{currentCollege.name}</h2>
          {/* 8 */}
          <div>
            <p>COE:</p>
            {/* 9 */}
            {currentCollege.coe && (
              <ul>
                {/* 10 */}
                {currentCollege.coe.map((item, key) => {
                  return <li key={key}>{item}</li>;
                })}
              </ul>
            )}
          </div>

          <p>
            CTE:
            <ul>
              {currentCollege.cte &&
                currentCollege.cte.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>

          <p>
            CONAH:
            <ul>
              {currentCollege.conah &&
                currentCollege.conah.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>

          <p>
            CAS:
            <ul>
              {currentCollege.cas &&
                currentCollege.cas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

// export default App;
