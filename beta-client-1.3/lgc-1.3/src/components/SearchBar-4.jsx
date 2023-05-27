import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, SetSearch] = useState("");
  const [bachelorsArr, setBachelorsArr] = useState([]);
  const [coeArr, setCoeArr] = useState([]);
  const [cteArr, setCteArr] = useState([]);
  const [casArr, setCasArr] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData(url, setter) {
      try {
        const response = await axios.get(url);
        const { bachelors } = response.data;
        setter(bachelors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData("http://localhost:3001/test/bachelors", setBachelorsArr);
    fetchData("http://localhost:3001/test/coe", setCoeArr);
    fetchData("http://localhost:3001/test/cte", setCteArr);
    fetchData("http://localhost:3001/test/cas", setCasArr);
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

  return (
    <>
      <h1>SEARCH BAR</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => SetSearch(e.target.value)}
      ></input>

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

      {result.length > 0 && (
        <div className="col-6">
          <h2>COLLEGES WITH THAT COURSE</h2>
          {result.map((name, index) => (
            <Link to={`/${name}`} key={index}>
              <h2>{name}</h2>
            </Link>
          ))}
        </div>
      )}

      {/* <ul className="list">
        {bachelorsArr
          .filter((bachelor) => bachelor.toLowerCase().includes(search))
          .map((bachelor, index) => (
            <li className="list-item" key={index}>
              {bachelor}
            </li>
          ))}
      </ul> */}
    </>
  );
}

export default SearchBar;
