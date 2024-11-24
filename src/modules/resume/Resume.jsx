import Education from "./Education";
import Experience from "./Experience";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>Super Mario</h1>
        <div>555-555-5555 | supermario@gmail.com</div>
      </div>
      <Education />
      <Experience />
    </div>
  );
}
