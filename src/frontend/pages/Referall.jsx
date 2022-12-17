import React, { useState } from "react";
//main function for the referral
import image from "../components/images/Bgimage.jpeg";
function Referral() {
  const [referredEmail, setReferredEmail] = useState("");
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
          placeholder="Refer a friend"
          className="referral-input"
          //onChange passes the entire tag as the variable e, reads target is the elements inside the tag, and value is the typed value
          onChange={(e) => {
            setReferredEmail(e.target.value);
          }}
        ></input>
        <div class="referral-code-background">Your Referral Code</div>
      </div>
    </div>
  );
}
export default Referral;
