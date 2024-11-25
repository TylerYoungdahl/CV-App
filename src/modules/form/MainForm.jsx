import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import "./MainForm.css";

export default function MainForm({ generalData, changeGeneral }) {
  return (
    <div className="main-form">
      <GeneralForm generalData={generalData} changeGeneral={changeGeneral} />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}
