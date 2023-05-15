import College from "../components/College";
import CollegeInfo from "../components/CollegeInfo";
import GetCourses from "../components/GetCourses";
import "./pages-css/college-homepage.css";

function LspuSccHomepage() {
  const collegeN = "LSPU-SCC";
  return (
    <div className="bg-main">
      <h1 className="text-light">LSPU SANTA CRUZ</h1>
      {/* <College collegeName={collegeN}></College> */}
      <CollegeInfo></CollegeInfo>
      <GetCourses collegeName={collegeN} departmentName="coe"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cte"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="conah"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cas"></GetCourses>
    </div>
  );
}

export default LspuSccHomepage;
