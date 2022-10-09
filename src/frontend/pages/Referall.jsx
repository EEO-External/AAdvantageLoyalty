import React from "react";
//main function for the referral
import image from "../components/images/Bgimage.jpeg";
function Referral(){
    return(
        <div>
        <div class="development-end"> </div>

        <div  class ="Body-background" style={{backgroundImage: `url(${image})`}}>
        
        <div class="development-end"> </div> 
        <div class="referral-background"> Referral Progress
            <div class = "progress-button" > 
                <div class  = "progress-bar-fill">  </div> 
            </div>
        </div>
        <div class = "referral-code-background">Your Referral Code
            </div> 
        </div>
        </div>
    );
}
export default Referral;