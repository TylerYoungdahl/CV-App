import "./ExperienceForm.css";

export default function ExperienceForm() {
  return (
    <form className="experience-form">
      <label htmlFor="input-job-title">Job Title:</label>
      <input type="text" name="input-job-title" id="input-job-title" />
      <label htmlFor="input-company">Company:</label>
      <input type="text" name="input-company" id="input-company" />
      <label htmlFor="input-job-start">Start Date</label>
      <input type="date" name="input-job-start" id="input-job-start" />
      <label htmlFor="input-job-end">End Date</label>
      <input type="date" name="input-job-end" id="input-job-end" />
    </form>
  );
}
