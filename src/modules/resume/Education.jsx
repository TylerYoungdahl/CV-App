import { useState } from "react";

export default function Education({
  id,
  school,
  schoolDegree,
  schoolStart,
  schoolEnd,
  editEducation,
  educationIsActive,
}) {
  return (
    <div
      className={educationIsActive ? "education active" : "education"}
      onClick={() => editEducation(id)}
    >
      <h2 className="school">{school}</h2>
      <h3 className="school-degree">{schoolDegree}</h3>
      <p className="school-years">
        {schoolStart}-{schoolEnd}
      </p>
    </div>
  );
}
