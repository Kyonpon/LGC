import { useState } from "react";

//{items:[],heading: String}

function ListGroup() {
  const items = [
    "PATRICK",
    "MARK",
    "DANIEL",
    "JOHN",
    "AMANDA",
    "MICHAEL",
    "CAROL",
  ];
  // this is how to map a list of items
  //   items.map((items) => <li>{items}</li>);

  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <>
      <h1>LIST GROUP</h1>
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            key={items}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
