import Button from "./Button";
import { defaultEducationData } from "../../defaultValues";
import "./EducationForm.css";

export default function EducationForm({
  educationData = { defaultEducationData },
  changeEducation,
  addEducation,
  educationIsEdit,
  updateEducation,
}) {
  return (
    <form className="education-form" key={educationData.id}>
      <label htmlFor="form-school">School:</label>
      <input
        type="text"
        name="school"
        id="form-school"
        value={educationData.school}
        onChange={changeEducation}
      />
      <label htmlFor="input-school-degree">Degree:</label>
      <input
        type="text"
        name="schoolDegree"
        id="input-school-degree"
        value={educationData.schoolDegree}
        onChange={changeEducation}
      />
      <label htmlFor="input-school-start">Start Year:</label>
      <input
        type="number"
        name="schoolStart"
        id="input-school-start"
        value={educationData.schoolStart}
        onChange={changeEducation}
        min={0}
        max={2025}
      />
      <label htmlFor="input-school-end">End Year:</label>
      <input
        type="number"
        name="schoolEnd"
        id="input-school-end"
        value={educationData.schoolEnd}
        onChange={changeEducation}
        min={0}
        max={2025}
      />
      <Button
        buttonText={educationIsEdit ? "Update Education" : "Add Education"}
        handleClick={educationIsEdit ? updateEducation : addEducation}
      />
    </form>
  );
}
