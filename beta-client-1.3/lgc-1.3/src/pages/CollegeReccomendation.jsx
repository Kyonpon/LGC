import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DistTest from "../components/DistTest2";

export default function CollegeReccomendation() {
  const [coeArr, setCoeArr] = useState([]);
  const [cteArr, setCteArr] = useState([]);
  const [casArr, setCasArr] = useState([]);
  const [conahArr, setConahArr] = useState([]);
  // result contains all the school that have that course
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData(url, setter) {
      try {
        const response = await axios.get(url);
        const { bachelors } = response.data;
        setter(bachelors);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData("http://localhost:3001/test/coe", setCoeArr);
    fetchData("http://localhost:3001/test/cte", setCteArr);
    fetchData("http://localhost:3001/test/cas", setCasArr);
    fetchData("http://localhost:3001/test/conah", setConahArr);
  }, []);

  const handleBachelorClick = async (bachelor) => {
    try {
      const response = await axios.get("http://localhost:3001/test/search", {
        params: {
          bachelor: bachelor,
        },
      });
      setResult(response.data.names); // Set the response data to the 'result' state
    } catch (error) {
      console.error("Error searching for bachelor:", error);
    }
  };

  //1.3 stuff
  const [selectedItem, setSelectedItem] = useState("");
  const [includedColleges, setIncludedColleges] = useState([]);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleInclude = (event) => {
    const selectedColleges = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setIncludedColleges(selectedColleges);
  };

  return (
    <>
      <h1>Closest College</h1>
      <h3>Choose A Course</h3>

      <div className="container-fluid">
        <h1>COE</h1>
        <div className="row justify-content-center">
          {coeArr.map((bachelor) => (
            <p
              className="col-3 border m-1 p-2 text-center h-10 "
              key={bachelor.id}
              onClick={() => handleBachelorClick(bachelor)}
            >
              {bachelor}
            </p>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h1>CTE</h1>
        <div className="row justify-content-center">
          {cteArr.map((bachelor) => (
            <p
              className="col-3 border m-1 p-2 text-center"
              key={bachelor.id}
              onClick={() => handleBachelorClick(bachelor)}
            >
              {bachelor}
            </p>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h1>CAS</h1>
        <div className="row justify-content-center">
          {casArr.map((bachelor) => (
            <p
              className="col-3 border m-1 p-2 text-center "
              key={bachelor.id}
              onClick={() => handleBachelorClick(bachelor)}
            >
              {bachelor}
            </p>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h1>CONAH</h1>
        <div className="row justify-content-center">
          {conahArr.map((bachelor) => (
            <p
              className="col-3 border m-1 p-2 text-center "
              key={bachelor.id}
              onClick={() => handleBachelorClick(bachelor)}
            >
              {bachelor}
            </p>
          ))}
        </div>
      </div>

      {/* This show all the college that offers that course */}
      {result.length > 0 && (
        <div className="col-6 mt-5">
          <h2>COLLEGES WITH THAT COURSE</h2>
          {result.map((name, index) => (
            <Link to={`/${name}`} key={index}>
              <h2>{name}</h2>
            </Link>
          ))}
        </div>
      )}

      <div>
        <div>
          <h2>CHOOSE WHERE YOU LIVED</h2>
          <select value={selectedItem} onChange={handleChange}>
            <option value="">Select an item</option>
            <option value="SantaCruz">Santa Cruz</option>
            <option value="Pila">Pila</option>
            <option value="Pagsanjan">Pagsanjan</option>
            <option value="Lumban">Lumban</option>
            <option value="Majayjay">Majayjay</option>
            <option value="LosBaños">Los Baños</option>
            <option value="Sanpablo">San Pablo</option>
            <option value="Siniloan">Siniloan</option>
            <option value="Calamba">Calamba</option>
            <option value="SantaRosa">Santa Rosa</option>
            <option value="Cabuyao">Cabuyao</option>
          </select>
          <p>Selected item: {selectedItem}</p>
        </div>

        <div>
          <h2>CHOOSE YOUR COLLEGE</h2>
          <h3>You can select multiple by holding left ctrl</h3>
          <select multiple onChange={handleInclude}>
            <option value="UPLB">UPLB</option>
            <option value="LSPU-SCC">LSPU-SCC</option>
            <option value="LU">LU</option>
            <option value="LSPU-SPC">LSPU-SPC</option>
            <option value="LSPU-LB">LSPU-LB</option>
            <option value="LSPU-SNL">LSPU-SNL</option>

            {/* Add more options as needed */}
          </select>
          <p>Included colleges: {includedColleges.join(", ")}</p>
        </div>

        <DistTest townName={selectedItem} include={includedColleges} />
      </div>
    </>
  );
}
