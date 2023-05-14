import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LspuSCC } from "./pages/lspuScc";
import { LspuBULACAN } from "./pages/lscpuBulacan";
import { Home } from "./pages/home";
import CollegeName from "./pages/collegeNameComponent";

//CSS IMPORTS
//ALL GLOBAL CSS SELECTORS (EX: BODY , H1, P, DIV) ARE INSIDE THE APP.CSS
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collegename" element={<CollegeName />} />
          <Route path="/lspuscc/:id" element={<LspuSCC />} />
          <Route path="/lspubulacan" element={<LspuBULACAN />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
