import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import Button from "./Button";
import "./MainForm.css";

export default function MainForm({
  generalData,
  changeGeneral,
  educationData,
  changeEducation,
  addEducation,
}) {
  return (
    <div className="main-form">
      <GeneralForm generalData={generalData} changeGeneral={changeGeneral} />
      <EducationForm
        educationData={educationData}
        addEducation={addEducation}
        changeEducation={changeEducation}
      />
      <ExperienceForm />
    </div>
  );
}
