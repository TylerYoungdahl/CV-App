import "./GeneralForm.css";

export default function GeneralForm({
  generalData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  },
  changeGeneral,
}) {
  return (
    <form className="general-form">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={generalData.firstName}
        onChange={changeGeneral}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={generalData.lastName}
        onChange={changeGeneral}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={generalData.phone}
        onChange={changeGeneral}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={generalData.email}
        onChange={changeGeneral}
      />
    </form>
  );
}
