export default function Education({
  id,
  school,
  schoolDegree,
  schoolStart,
  schoolEnd,
}) {
  return (
    <div className="resume-education" data-id={id}>
      <h2 className="school">{school}</h2>
      <h3 className="school-degree">{schoolDegree}</h3>
      <p className="school-years">
        {schoolStart}-{schoolEnd}
      </p>
    </div>
  );
}
