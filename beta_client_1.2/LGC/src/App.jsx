import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LspuSccHomepage from "./pages/LspuSccHomepage";

function App() {
  return (
    <div className="App-div">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/lspuscc" element={<LspuSccHomepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
