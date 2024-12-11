export default function Experience({
  id,
  job,
  company,
  jobStart,
  jobEnd,
  editExperience,
  experienceIsActive,
}) {
  return (
    <div
      className={experienceIsActive ? "experience active" : "experience"}
      onClick={() => editExperience(id)}
    >
      <h2 className="position">{job}</h2>
      <p className="company">{company}</p>
      <p className="years-active">
        {jobStart}-{jobEnd}
      </p>
    </div>
  );
}
