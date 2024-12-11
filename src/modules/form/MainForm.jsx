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
  deleteEducation,
  experienceData,
  changeExperience,
  addExperience,
  experienceIsEdit,
  updateExperience,
  deleteExperience,
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
        deleteEducation={deleteEducation}
      />
      <ExperienceForm
        experienceData={experienceData}
        changeExperience={changeExperience}
        addExperience={addExperience}
        experienceIsEdit={experienceIsEdit}
        updateExperience={updateExperience}
        deleteExperience={deleteExperience}
      />
    </div>
  );
}
