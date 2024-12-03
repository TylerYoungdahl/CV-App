import MainForm from "./modules/form/MainForm";
import Resume from "./modules/resume/Resume";
import Education from "./modules/resume/Education";
import "./App.css";
import { useState } from "react";

function App() {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [education, setEducation] = useState([]);
  const [educationData, setEducationData] = useState({
    id: crypto.randomUUID(),
    school: "",
    schoolDegree: "",
    schoolStart: 0,
    schoolEnd: 0,
  });
  const [experienceData, setExperienceData] = useState({
    id: crypto.randomUUID(),
    job: "",
    company: "",
    jobStart: new Date().toISOString().split("T")[0],
    jobEnd: new Date().toISOString().split("T")[0],
  });
  const [experience, setExperience] = useState([]);

  ///////////////////////////////////////////////////

  const handleChangeGeneral = (e) => {
    const { name, value } = e.target;
    setGeneralData((prevData) => ({ ...prevData, [name]: value }));
  };

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
    });
  };

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

  const testFunction = () => {
    // education.forEach((entry) => {
    //   console.log(entry.id);
    // });
    console.log(experience);
  };
  ///////////////////////////////////////////////////////
  return (
    <div className="main">
      <button type="button" onClick={testFunction}>
        test button
      </button>
      <MainForm
        generalData={generalData}
        changeGeneral={handleChangeGeneral}
        educationData={educationData}
        changeEducation={handleChangeEducation}
        addEducation={handleAddEducation}
        experienceData={experienceData}
        changeExperience={handleChangeExperience}
        addExperience={handleAddExperience}
      />
      <Resume
        generalData={generalData}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
