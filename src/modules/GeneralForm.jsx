import "./GeneralForm.css";

export default function GeneralForm() {
  return (
    <>
      <form className="general-form">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" name="phone" id="phone" />
      </form>
    </>
  );
}
