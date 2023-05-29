// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function DistTest(props) {
//   const [collegeData, setCollegeData] = useState([]);

//   useEffect(() => {
//     const fetchDistance = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/dist/test/${
//             props.townName
//           }?omit=${props.omit.join(",")}`
//         );
//         setCollegeData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchDistance();
//   }, [props.townName, props.omit]);

//   return (
//     <div>
//       <h1>Dist Test</h1>
//       {collegeData.map((college) => (
//         <div key={college._id}>
//           {/* <p>Name: {college.name}</p> */}
//           <p>
//             Distance of {college.name} to {props.townName}:{" "}
//             {college[props.townName]}km
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DistTest;

import axios from "axios";
import React, { useEffect, useState } from "react";

function DistTest(props) {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/dist/test/${
            props.townName
          }?include=${props.include.join(",")}`
        );
        setCollegeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDistance();
  }, [props.townName, props.include]);

  return (
    <div>
      <h1>Distance of College to your home</h1>
      {collegeData.map((college) => (
        <div key={college._id}>
          {/* <p>Name: {college.name}</p> */}
          <p>
            Distance of {college.name} to {props.townName}:{" "}
            {college[props.townName]}km
          </p>
        </div>
      ))}
    </div>
  );
}

export default DistTest;
