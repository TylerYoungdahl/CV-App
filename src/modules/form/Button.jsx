export default function ButtonEducation({ buttonText, handleClick }) {
  return (
    <button type="button" className="button-education" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
