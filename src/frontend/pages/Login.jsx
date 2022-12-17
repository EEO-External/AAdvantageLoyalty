import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../components/images/Bgimage.jpeg";
import { useNavigate } from "react-router-dom";
function Login() {
<<<<<<< HEAD
  const [email, setEmail] = useState(""); //string variabels
  const [advantage, setAdvantage] = useState(""); //string variabels
  const [lastname, setLastName] = useState("");
=======
  const [lastName, setLastName] = useState(""); //string variabels
  const [aadvantage, setAadvantage] = useState(""); //string variabels
  const [password, setPassword] = useState(""); //string variabels
>>>>>>> asa
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
<<<<<<< HEAD
        advantage: advantage,
        lastname: lastname,
        email: email,
=======
        aadvantage: aadvantage,
        lastname: lastName,
        password: password,
>>>>>>> asa
      })
      .then(() => {
        navigate("/referral");
      });

    // 👇️ redirect to /contacts
  };
<<<<<<< HEAD
  const sendEmail = async () => {
  };
=======
  const sendEmail = async () => {};

  function handleOnChange() {
    test();
  }

  function test() {
    axios.post("http://localhost:3001/tests", {
      last: lastName,
      aadvantage: aadvantage,
      password: password,
    });
  }
>>>>>>> asa

  return (
    <>
      <div class="Body-background" style={{ backgroundImage: `url(${image})` }}>
        <div className="Login-container">
          <input
            placeholder="LastName"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>

          <input
            placeholder="Advantage"
            className="join-input"
            //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
            onChange={(e) => {
              setAadvantage(e.target.value);
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
