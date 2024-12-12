import { useState } from "react";
import { defaultEducationData, defaultExperienceData } from "./defaultValues";
import MainForm from "./modules/form/MainForm";
import Resume from "./modules/resume/Resume";
import Education from "./modules/resume/Education";
import "./App.css";

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
  const [educationData, setEducationData] = useState(defaultEducationData);
  const [educationIsEdit, setEducationIsEdit] = useState(false);
  // EXPERIENCE
  const [experience, setExperience] = useState([]);
  const [experienceData, setExperienceData] = useState(defaultExperienceData);
  const [experienceIsEdit, setExperienceIsEdit] = useState(false);

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
    setEducationData({ ...defaultEducationData, id: crypto.randomUUID() });
  };

  const handleEditEducation = (id) => {
    const entry = education.find((entry) => entry.id === id);

    if (educationIsEdit && entry.educationIsActive) {
      setEducation((prevData) =>
        prevData.map((entry) => ({ ...entry, educationIsActive: false }))
      );
      setEducationIsEdit(false);
      setEducationData({ ...defaultEducationData, id: crypto.randomUUID() });
    } else {
      setEducation((prevData) =>
        prevData.map((entry) =>
          entry.id === id
            ? { ...entry, educationIsActive: true }
            : { ...entry, educationIsActive: false }
        )
      );
      setEducationIsEdit(true);
      setEducationData(entry);
    }
  };

  const handleUpdateEducation = () => {
    setEducation((prevData) =>
      prevData.map((entry) =>
        entry.id === educationData.id
          ? { ...entry, ...educationData, educationIsActive: false }
          : entry
      )
    );
    setEducationIsEdit(false);
  };

  const handleDeleteEducation = () => {
    setEducation((prevData) =>
      prevData.filter((entry) => entry.id !== educationData.id)
    );
    setEducationData({ ...defaultEducationData, id: crypto.randomUUID() });
    setEducationIsEdit(false);
  };

  // EXPERIENCE
  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddExperience = () => {
    setExperience([...experience, experienceData]);
    setExperienceData({ ...defaultExperienceData, id: crypto.randomUUID() });
  };

  const handleEditExperience = (id) => {
    const entry = experience.find((entry) => entry.id === id);

    if (!entry) {
      console.error(`No experience entry found with id: ${id}`);
      return;
    }

    if (experienceIsEdit && entry.experienceIsActive) {
      setExperience((prevData) =>
        prevData.map((entry) => ({ ...entry, experienceIsActive: false }))
      );
      setExperienceIsEdit(false);
      setExperienceData({ ...defaultExperienceData, id: crypto.randomUUID() });
    } else {
      setExperience((prevData) =>
        prevData.map((entry) =>
          entry.id === id
            ? { ...entry, experienceIsActive: true }
            : { ...entry, experienceIsActive: false }
        )
      );
      setExperienceIsEdit(true);
      setExperienceData(entry);
    }
  };

  const handleUpdateExperience = () => {
    setExperience((prevData) =>
      prevData.map((entry) =>
        entry.id === experienceData.id
          ? { ...entry, ...experienceData, experienceIsActive: false }
          : entry
      )
    );
    setExperienceIsEdit(false);
  };

  const handleDeleteExperience = () => {
    setExperience((prevData) =>
      prevData.filter((entry) => entry.id !== experienceData.id)
    );
    setExperienceData({ ...defaultExperienceData, id: crypto.randomUUID() });
    setExperienceIsEdit(false);
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
        deleteEducation={handleDeleteEducation}
        experienceData={experienceData}
        changeExperience={handleChangeExperience}
        addExperience={handleAddExperience}
        experienceIsEdit={experienceIsEdit}
        updateExperience={handleUpdateExperience}
        deleteExperience={handleDeleteExperience}
      />
      <Resume
        generalData={generalData}
        education={education}
        editEducation={handleEditEducation}
        experience={experience}
        editExperience={handleEditExperience}
      />
    </div>
  );
}

export default App;
