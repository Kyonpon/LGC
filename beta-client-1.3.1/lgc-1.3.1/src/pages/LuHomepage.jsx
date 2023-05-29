import College from "../components/College";
import CollegeInfo from "../components/CollegeInfo";
import GetCourses from "../components/GetCourses";
import BasicNavbar from "../components/BasicNavbar";
import "./pages-css/college-homepage.css";

function LuHomepage() {
  const collegeN = "LU";
  return (
    <div className="bg-main">
      <h1 className="text-light">LU</h1>
      {/* <College collegeName={collegeN}></College> */}

      <CollegeInfo></CollegeInfo>
      <GetCourses collegeName={collegeN} departmentName="coe"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cte"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cas"></GetCourses>
      <BasicNavbar></BasicNavbar>
    </div>
  );
}

export default LuHomepage;
