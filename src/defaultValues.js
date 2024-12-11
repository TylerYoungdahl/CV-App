const defaultEducationData = {
  id: crypto.randomUUID(),
  school: "",
  schoolDegree: "",
  schoolStart: 0,
  schoolEnd: 0,
  educationIsActive: false,
};

const defaultExperienceData = {
  id: crypto.randomUUID(),
  job: "",
  company: "",
  jobStart: new Date().toISOString().split("T")[0],
  jobEnd: new Date().toISOString().split("T")[0],
  experienceIsActive: false,
};

export { defaultEducationData, defaultExperienceData };
