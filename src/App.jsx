import MainForm from "./modules/form/MainForm";
import Resume from "./modules/resume/Resume";
import "./App.css";
import { useState } from "react";

function App() {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChangeGeneral = (e) => {
    const { name, value } = e.target;
    setGeneralData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="main">
      <MainForm generalData={generalData} changeGeneral={handleChangeGeneral} />
      <Resume generalData={generalData} />
    </div>
  );
}

export default App;
