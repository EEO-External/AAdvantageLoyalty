import { useState } from "react";
import image from "../components/images/Bgimage.jpeg";

function Login() {
  const [email, setEmail] = useState(""); //string variabels
  const [password, setPassword] = useState(""); //string variabels

  function handleSubmit() {
    console.log(email, password);
  }

  return (
    <>
      <div class="Body-background" style={{ backgroundImage: `url(${image})` }}>
        <div className="Login-container">
          <input
            placeholder="Last name"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            placeholder="Advantage #"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            placeholder="Password"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <div className="join-container">
            <button onClick={handleSubmit}>Login In</button>
            <div>
              <button className="join-btn"> </button>
            </div>
            Join AAdvantage
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
