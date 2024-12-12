export default function ButtonEducation({ buttonText, handleClick }) {
  return (
    <button type="button" className="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
