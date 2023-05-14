import College from "../components/College";
import GetCourses from "../components/GetCourses";

function LspuSccHomepage() {
  const collegeN = "LSPU-SCC";
  return (
    <div>
      <h1>LSPU SANTA CRUZ</h1>
      <College collegeName={collegeN}></College>
      <GetCourses collegeName={collegeN} departmentName="coe"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cte"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="conah"></GetCourses>
      <GetCourses collegeName={collegeN} departmentName="cas"></GetCourses>
    </div>
  );
}

export default LspuSccHomepage;
