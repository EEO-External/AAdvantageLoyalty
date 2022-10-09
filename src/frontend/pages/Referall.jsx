import React, { useState } from "react";
//main function for the referral
import emailjs from "emailjs-com";
import image from "../components/images/Bgimage.jpeg";

function Referral() {
  const [referredEmail, setReferredEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    emailjs.send(
      "service_i6axn1p",
      "template_skyzdns",
      {
        to_name: referredEmail,
      },
      "Moa0t217dvVU8rmk6"
    );
  }

  return (
    <div>
      <div class="Body-background" style={{ backgroundImage: `url(${image})` }}>
        <div class="development-end"> </div>
        <div class="referral-background">
          {" "}
          Referral Progress
          <div class="progress-button">
            <div class="progress-bar-fill"> </div>
          </div>
        </div>
        <input
          type={"email"}
          placeholder="Email a referral"
          className="referral-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setReferredEmail(e.target.value);
          }}
        ></input>
        <button className="employeeEmail-btn" onClick={sendEmail}>
          Send Email
        </button>
        <div className="referral-code-background">Your Referral Code</div>
      </div>
    </div>
  );
}
export default Referral;
