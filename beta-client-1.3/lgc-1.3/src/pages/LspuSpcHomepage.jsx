import College from "../components/College";
import CollegeInfo from "../components/CollegeInfo";
import GetCourses from "../components/GetCourses";
import "./pages-css/college-homepage.css";

function LspuSpcHomepage() {
  const collegeN = "LSPU-SPC";
  return (
    <div className="bg-main">
      <h1 className="text-light">LSPU SAN PABLO</h1>
      {/* <College collegeName={collegeN}></College> */}

      <CollegeInfo></CollegeInfo>
      <GetCourses collegeName={collegeN} departmentName="coe"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cte"></GetCourses>

      <GetCourses collegeName={collegeN} departmentName="cas"></GetCourses>
    </div>
  );
}

export default LspuSpcHomepage;
