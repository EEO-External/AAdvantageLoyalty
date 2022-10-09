import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../components/images/Bgimage.jpeg";
import React from 'react'
function Login() {
  const [email, setEmail] = useState(""); //string variabels
  const [advantage, setAdvantage] = useState(""); //string variabels
  const [lastname, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        advantage: advantage,
        lastname: lastname,
        email: email,
      })
      .then(() => {
        navigate("/referral");
      });

    // 👇️ redirect to /contacts
  };
  const sendEmail = async () => {
  };

  return (
    <>
      <div class="Body-background" style={{ backgroundImage: `url(${image})` }}>
        <div className="Login-container">
          <input
            placeholder="Last name"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setLastName(e.target.value);
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
              setAdvantage(e.target.value);
            }}
          ></input>
          <div className="join-container">
            <button onClick={handleSubmit}>Login In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
