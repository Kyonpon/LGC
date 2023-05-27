import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [bachelorsArr, setBachelorsArr] = useState([]);
  const [showList, setShowList] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchBachelorData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/test/bachelors"
        );
        const { bachelors } = response.data;
        setBachelorsArr(bachelors);
      } catch (error) {
        console.error("Error fetching bachelor data:", error);
      }
    }

    fetchBachelorData();
  }, []);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setShowList(inputValue !== ""); // Show the list if the input value is not empty
  };

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
      <h1 className="bg-dark text-light">SEARCH BAR</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      ></input>
      <div className="row">
        {showList && (
          <ul className="list-group col-6">
            {bachelorsArr
              .filter((bachelor) => bachelor.toLowerCase().includes(search))
              .slice(0, 1)
              .map((bachelor, index) => (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={() => handleBachelorClick(bachelor)}
                >
                  {bachelor}
                </li>
              ))}
          </ul>
        )}

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
      </div>
    </>
  );
}

export default SearchBar;
