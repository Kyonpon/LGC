import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [bachelorsArr, setBachelorsArr] = useState([]);
  const [showList, setShowList] = useState(false);

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

  return (
    <>
      <h1>SEARCH BAR</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      ></input>
      {showList && (
        <ul className="list-group">
          {bachelorsArr
            .filter((bachelor) => bachelor.toLowerCase().includes(search))
            .map((bachelor, index) => (
              <li
                className="list-group-item"
                key={index}
                onClick={() => console.log({ bachelor })}
              >
                {bachelor}
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default SearchBar;
