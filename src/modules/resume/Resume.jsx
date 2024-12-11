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
  education = [],
  editEducation,
  experience = [],
  editExperience,
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
      {education.map((entry) => {
        return (
          <Education
            key={entry.id}
            id={entry.id}
            school={entry.school}
            schoolDegree={entry.schoolDegree}
            schoolStart={entry.schoolStart}
            schoolEnd={entry.schoolEnd}
            editEducation={editEducation}
            educationIsActive={entry.educationIsActive}
          />
        );
      })}
      {experience.map((entry) => {
        return (
          <Experience
            key={entry.id}
            id={entry.id}
            job={entry.job}
            company={entry.company}
            jobStart={entry.jobStart}
            jobEnd={entry.jobEnd}
            editExperience={editExperience}
            experienceIsActive={entry.experienceIsActive}
          />
        );
      })}
    </div>
  );
}
