import Education from "./Education";
import Experience from "./Experience";
import "./Resume.css";

export default function Resume({
  generalData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  },
}) {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>
          {generalData.firstName} {generalData.lastName}
        </h1>
        <div>
          {generalData.phone} | {generalData.email}
        </div>
      </div>
      <Education />
      <Experience />
    </div>
  );
}
