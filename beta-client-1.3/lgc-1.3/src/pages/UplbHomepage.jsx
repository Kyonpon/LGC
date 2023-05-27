import College from "../components/College";
import CollegeInfo from "../components/CollegeInfo";
import GetCourses from "../components/GetCourses";
import BasicNavbar from "../components/BasicNavbar";
import "./pages-css/college-homepage.css";

function UplbHomepage() {
  const collegeN = "UPLB";
  return (
    <div className="bg-main">
      <h1 className="text-light">UPLB</h1>
      {/* <College collegeName={collegeN}></College> */}

      <CollegeInfo></CollegeInfo>
      <GetCourses collegeName={collegeN} departmentName="coe"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cas"></GetCourses>
      <BasicNavbar></BasicNavbar>
    </div>
  );
}

export default UplbHomepage;
