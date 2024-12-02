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

  const testFunction = () => {
    console.log(education);
  };

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
      />
      <Resume generalData={generalData} education={education} />
    </div>
  );
}

export default App;
