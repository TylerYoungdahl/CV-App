import Button from "./Button";
import "./ExperienceForm.css";

export default function ExperienceForm({
  experienceData = { id, job, company, jobStart, jobEnd },
  changeExperience,
  addExperience,
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
      <Button buttonText={"Add Experience"} handleClick={addExperience} />
    </form>
  );
}
