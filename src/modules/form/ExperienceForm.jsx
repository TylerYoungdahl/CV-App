import Button from "./Button";
import { defaultExperienceData } from "../../defaultValues";
import "./ExperienceForm.css";

export default function ExperienceForm({
  experienceData = { defaultExperienceData },
  changeExperience,
  addExperience,
  experienceIsEdit,
  updateExperience,
  deleteExperience,
}) {
  return (
    <form className="experience-form" key={experienceData.id}>
      <label htmlFor="input-job-title">Job:</label>
      <input
        type="text"
        name="job"
        id="input-job-title"
        value={experienceData.job}
        onChange={changeExperience}
      />
      <label htmlFor="input-company">Company:</label>
      <input
        type="text"
        name="company"
        id="input-company"
        value={experienceData.company}
        onChange={changeExperience}
      />
      <label htmlFor="input-job-start">Start Date:</label>
      <input
        type="date"
        name="jobStart"
        id="input-job-start"
        value={experienceData.jobStart}
        onChange={changeExperience}
      />
      <label htmlFor="input-job-end">End Date:</label>
      <input
        type="date"
        name="jobEnd"
        id="input-job-end"
        value={experienceData.jobEnd}
        onChange={changeExperience}
      />
      <Button
        buttonText={experienceIsEdit ? "Update Experience" : "Add Experience"}
        handleClick={experienceIsEdit ? updateExperience : addExperience}
      />
      {experienceIsEdit ? (
        <Button buttonText={"Delete"} handleClick={deleteExperience} />
      ) : null}
    </form>
  );
}
