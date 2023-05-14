import { Link } from "react-router-dom";

// CSS imports
import "../css/Home.css";

export const Home = () => {
  return (
    <>
      <div id="title-page-container">
        <div id="homepage-title">Home</div>
        <section id="school-boxes">
          <Link to="/lspuscc" className="item-link">
            STA CRUZ
          </Link>

          <Link to="/lspubulacan" className="item-link">
            BULACAN
          </Link>
        </section>
      </div>
    </>
  );
};
