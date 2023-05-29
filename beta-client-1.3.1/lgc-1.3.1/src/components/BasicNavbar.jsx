import { Link } from "react-router-dom";

export default function BasicNavbar() {
  return (
    <>
      <section>
        <h1>TEST PAGES</h1>
        <Link to="/">
          <h2>HOME</h2>
        </Link>
        <Link to="/test3">
          <h2>DISTANCE CALCU</h2>
        </Link>
        <Link to="/test2">
          <h2>DISTANCE test page</h2>
        </Link>
        <Link to="/test">
          <h2>Search Bar test page</h2>
        </Link>
        <Link to="/test4">
          <h2>Survey test page</h2>
        </Link>
      </section>
      <section>
        <h1>SCHOOLS PROFLE</h1>
        <Link to="/lspu-scc">
          <h2>LSPU STA CRUZ PROFILE</h2>
        </Link>
        <Link to="/lspu-spc">
          <h2>LSPU SAN PABLO PROFILE</h2>
        </Link>
        <Link to="/lu">
          <h2>LAGUNA UNIVERSITY PROFILE</h2>
        </Link>
        <Link to="/uplb">
          <h2>UNIVERSITY OF THE PHILIPPINES PROFILE</h2>
        </Link>
      </section>
    </>
  );
}
