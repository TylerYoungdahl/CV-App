export default function Experience({ id, job, company, jobStart, jobEnd }) {
  return (
    <div className="experience" data-id={id}>
      <h2 className="position">{job}</h2>
      <p className="company">{company}</p>
      <p className="years-active">
        {jobStart}-{jobEnd}
      </p>
    </div>
  );
}
