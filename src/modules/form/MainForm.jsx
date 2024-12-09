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
  educationIsEdit,
  updateEducation,
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
        educationIsEdit={educationIsEdit}
        updateEducation={updateEducation}
      />
      <ExperienceForm
        experienceData={experienceData}
        changeExperience={changeExperience}
        addExperience={addExperience}
      />
    </div>
  );
}
