import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import "./MainForm.css";

export default function MainForm({
  generalData,
  changeGeneral,
  educationData,
  changeEducation,
  addEducation,
  experienceData,
  changeExperience,
  addExperience,
}) {
  return (
    <div className="main-form">
      <GeneralForm generalData={generalData} changeGeneral={changeGeneral} />
      <EducationForm
        educationData={educationData}
        addEducation={addEducation}
        changeEducation={changeEducation}
      />
      <ExperienceForm
        experienceData={experienceData}
        changeExperience={changeExperience}
        addExperience={addExperience}
      />
    </div>
  );
}
