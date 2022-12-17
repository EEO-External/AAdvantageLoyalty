import React from "react";
import { useState } from "react";
//main function for the referral
import image from "../components/images/Bgimage.jpeg";
import emailjs from "emailjs-com";

function Referral() {
  const [referredEmail, setReferredEmail] = useState("");
  

  function notifyEmployee(e) {
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
          Referral Progress
          <div class="progress-button">
            <div class="progress-bar-fill"> </div>
            <div class="percentage"> 20% </div>
          </div>
        </div>
        <input
          type={"email"}
          placeholder="Refer a friend"
          className="referral-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setReferredEmail(e.target.value);
          }}
        ></input>

        <div class="referral-code-background">
          Your Referral Code
          <div class="referral-code"> X456-31FQ-I3OM-Z5HB</div>
        </div>

      </div>
    </div>
  );
}
export default Referral;
