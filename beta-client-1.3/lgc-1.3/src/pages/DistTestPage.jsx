import DistTest from "../components/DistTest2";
import { useState } from "react";

function DistTestPage() {
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
    <div>
      <div>
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
        <select multiple onChange={handleInclude}>
          <option value="LSPU-SCC">LSPU-SCC</option>
          <option value="LSPU-LB">LSPU-LB</option>
          <option value="LSPU-SNL">LSPU-SNL</option>
          <option value="LSPU-SPC">LSPU-SPC</option>
          {/* Add more options as needed */}
        </select>
        <p>Included colleges: {includedColleges.join(", ")}</p>
      </div>

      <DistTest townName={selectedItem} include={includedColleges} />
    </div>
  );
}

export default DistTestPage;
