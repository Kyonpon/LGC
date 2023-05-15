import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LspuSccHomepage from "./pages/LspuSccHomepage";
import LuHomepage from "./pages/LuHomepage";
import UplbHomepage from "./pages/UplbHomePage";

function App() {
  return (
    <div className="App-div ">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/lspuscc" element={<LspuSccHomepage />} />
          <Route path="/lu" element={<LuHomepage />} />
          <Route path="/uplb" element={<UplbHomepage></UplbHomepage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
