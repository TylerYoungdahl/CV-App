import "./EducationForm.css";

export default function EducationForm() {
  return (
    <form className="education-form">
      <label htmlFor="form-school">School:</label>
      <input type="text" id="form-school" name="input-school" />
      <label htmlFor="input-school-degree">Degree:</label>
      <input type="text" id="input-school-degree" />
      <label htmlFor="input-school-start">Start Year:</label>
      <input
        type="number"
        name="input-school-start"
        id="input-school-start"
        min={1900}
        max={2025}
      />
      <label htmlFor="input-school-end">End Year:</label>
      <input
        type="number"
        name="input-school-end"
        id="input-school-end"
        min={1900}
        max={2025}
      />
    </form>
  );
}
