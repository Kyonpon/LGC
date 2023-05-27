import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LspuSccHomepage from "./pages/LspuSccHomepage";
import LuHomepage from "./pages/LuHomepage";
import UplbHomepage from "./pages/UplbHomepage";

import SearchBar from "./components/SearchBar-4";
import LspuSpcHomepage from "./pages/LspuSpcHomepage";

import LGCHome from "./pages/LGCHome";
import DistTest from "./components/DistTest";
import DistTestPage from "./pages/DistTestPage";
import CollegeReccomendation from "./pages/CollegeReccomendation";

function App() {
  return (
    <div className="App-div ">
      <Router>
        <Routes>
          <Route path="/" element={<LGCHome />} />
          <Route path="/test3" element={<CollegeReccomendation />} />
          <Route path="/test2" element={<DistTestPage />} />
          <Route path="/test" element={<SearchBar />} />
          <Route path="/lspu-scc" element={<LspuSccHomepage />} />
          <Route path="/lu" element={<LuHomepage />} />
          <Route path="/uplb" element={<UplbHomepage></UplbHomepage>} />
          <Route
            path="/lspu-spc"
            element={<LspuSpcHomepage></LspuSpcHomepage>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
