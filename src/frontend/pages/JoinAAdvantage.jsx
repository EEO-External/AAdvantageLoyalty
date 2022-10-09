import axios from "axios";
import { useState } from "react";

function Join() {
  //first you read the values from, while the secod is hpow you set the values
  const [firstName, setFirstName] = useState(""); //string variabels
  const [middleName, setMiddleName] = useState(""); //string variabels
  const [lastName, setLastName] = useState(""); //string variabels
  const [suffix, setSuffixName] = useState(""); //string variabels
  const [birthDate, setBirthDate] = useState(""); //string variabels
  const [email, setEmail] = useState(""); //string variabels
  const [phone, setPhone] = useState(""); //string variabels
  const [country, setCountry] = useState(""); //string variabels
  const [street, setStreet] = useState(""); //string variabels
  const [zip, setZip] = useState(""); //string variabels
  const [password, setPassword] = useState(""); //string variabels

  function handleSubmit() {
    console.log(
      firstName,
      middleName,
      lastName,
      suffix,
      birthDate,
      email,
      phone,
      country,
      street,
      zip,
      password
    );
  }
  function handleOnChange() {
    tests();
  }

  //controls the background color of this page with hexdecimals
  document.body.style.background = "#1C1C1C";

  function tests() {
    axios.post("http://localhost:3001/tests", {
      first: firstName,
      middle: middleName,
      last: lastName,
      suffix: suffix,
      birthDate: birthDate,
      email: email,
      phone: phone,
      country: country,
      street: street,
      zip: zip,
      password: password,
    });
  }

  return (
    <>
      {/*This is the container for the Name html. I use containers because they're easy to move around without needing to change every single div */}
      <div className="join-container">
        NAME
        <input
          placeholder="First"
          className="join-input"
          id="firstName-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Middle"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Last"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          placeholder="Suffix"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setSuffixName(e.target.value);
          }}
        ></input>
        <input
          placeholder="birthDate"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
        ></input>
        <input
          placeholder="email"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="phone"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
          placeholder="country"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>
        <input
          placeholder="street"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        ></input>
        <input
          placeholder="zip"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setZip(e.target.value);
          }}
        ></input>
        <input
          placeholder="password"
          className="join-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        Submit
      </div>
      <div className="development-end"> </div>

      <div className="join-container">
        BIRTHDAY
        <input type={"date"} className="join-input"></input>
      </div>

      <div className="join-container">
        EMAIL
        <input
          type="email"
          className="join-input"
          placeholder="Email Address"
        ></input>
        <input type="email" className="join-input" placeholder="Verify"></input>
      </div>

      <div className="join-container">
        PHONE
        <input
          type="phone"
          className="join-input"
          placeholder="Country / region code"
        ></input>
        <input
          type="phone"
          className="join-input"
          placeholder="Mobile Number"
        ></input>
      </div>

      <div className="join-container">
        ADDRESS
        <input
          type="text"
          className="join-input"
          placeholder="Country / region code"
        ></input>
        <input
          type="text"
          className="join-input"
          placeholder="Street 1"
        ></input>
        <input
          type="text"
          className="join-input"
          placeholder="Street 2"
        ></input>
        <input type="text" className="join-input" placeholder="City"></input>
        <input
          type="text"
          className="join-input"
          placeholder="State/Province"
        ></input>
        <input
          type="text"
          className="join-input"
          placeholder="Zip/Postal Code"
        ></input>
      </div>

      <div className="join-container">
        PASSWORD
        <input
          type="text"
          className="join-input"
          placeholder="Password"
        ></input>{" "}
      </div>

      <div className="join-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
//exports the main function, returns the html to whichever file calls this function
export default Join;
