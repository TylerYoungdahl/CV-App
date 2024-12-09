import MainForm from "./modules/form/MainForm";
import Resume from "./modules/resume/Resume";
import Education from "./modules/resume/Education";
import "./App.css";
import { useState } from "react";

function App() {
  ///////////////////////////// STATE //////////////////////////////////

  // GENERAL
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  // EDUCATION
  const [education, setEducation] = useState([]);
  const [educationData, setEducationData] = useState({
    id: crypto.randomUUID(),
    school: "",
    schoolDegree: "",
    schoolStart: 0,
    schoolEnd: 0,
    educationIsActive: false,
  });
  const [educationIsEdit, setEducationIsEdit] = useState(false);
  // EXPERIENCE
  const [experienceData, setExperienceData] = useState({
    id: crypto.randomUUID(),
    job: "",
    company: "",
    jobStart: new Date().toISOString().split("T")[0],
    jobEnd: new Date().toISOString().split("T")[0],
  });
  const [experience, setExperience] = useState([]);

  ////////////////////// FUNCTIONS /////////////////////////////

  // GENERAL
  const handleChangeGeneral = (e) => {
    const { name, value } = e.target;
    setGeneralData((prevData) => ({ ...prevData, [name]: value }));
  };

  // EDUCATION
  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddEducation = () => {
    setEducation([...education, educationData]);
    setEducationData({
      id: crypto.randomUUID(),
      school: "",
      schoolDegree: "",
      schoolStart: 0,
      schoolEnd: 0,
      educationIsActive: false,
    });
  };

  const handleEditEducation = (id) => {
    setEducation((prevData) =>
      prevData.map((entry) =>
        entry.id === id
          ? { ...entry, educationIsActive: true }
          : { ...entry, educationIsActive: false }
      )
    );

    const entry = education.find((entry) => entry.id === id);

    setEducationIsEdit(!educationIsEdit);
    setEducationData(entry);
  };

  const handleUpdateEducation = () => {
    setEducation((prevData) =>
      prevData.map((entry) =>
        entry.id === educationData.id
          ? { ...entry, ...educationData, educationIsActive: false }
          : entry
      )
    );
    setEducationIsEdit(!educationIsEdit);
  };

  // EXPERIENCE
  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddExperience = () => {
    setExperience([...experience, experienceData]);
    setExperienceData({
      id: crypto.randomUUID(),
      job: "",
      company: "",
      jobStart: new Date().toISOString().split("T")[0],
      jobEnd: new Date().toISOString().split("T")[0],
    });
  };

  const testFn = () => {
    console.log(education);
  };
  ////////////////////////// JSX /////////////////////////////
  return (
    <div className="main">
      <MainForm
        generalData={generalData}
        changeGeneral={handleChangeGeneral}
        educationData={educationData}
        changeEducation={handleChangeEducation}
        addEducation={handleAddEducation}
        educationIsEdit={educationIsEdit}
        updateEducation={handleUpdateEducation}
        experienceData={experienceData}
        changeExperience={handleChangeExperience}
        addExperience={handleAddExperience}
      />
      <Resume
        generalData={generalData}
        education={education}
        editEducation={handleEditEducation}
        experience={experience}
      />
      <button onClick={testFn}>test button</button>
    </div>
  );
}

export default App;
