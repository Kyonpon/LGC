import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [search, SetSearch] = useState("");
  const [bachelorsArr, setBachelorsArr] = useState([]);

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

  console.log(
    Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  );
  return (
    <>
      <h1>SEARCH BAR</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => SetSearch(e.target.value)}
      ></input>
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(search)
        ).map((user) => (
          <li className="list-item" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
      <ul>
        {bachelorsArr.map((bachelor) => (
          <li className="list-item" key={bachelor.id}>
            {bachelor}
          </li>
        ))}
      </ul>
      <ul className="list">
        {bachelorsArr
          .filter((bachelor) => bachelor.toLowerCase().includes(search))
          .map((bachelor, index) => (
            <li className="list-item" key={index}>
              {bachelor}
            </li>
          ))}
      </ul>
    </>
  );
}

export default SearchBar;
