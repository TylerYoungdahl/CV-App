import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import "./MainForm.css";

export default function MainForm() {
  return (
    <div className="main-form">
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}
