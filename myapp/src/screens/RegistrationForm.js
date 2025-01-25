import React from "react";
// import WelcomeMembers from "./WelcomeMembers";
import '../utils/RegistrationForm.css'
function RegistrationForm() {
  // let age = 17;
    function RegisterTheUser(e){
        e.preventDefault(); // Do not reload the screen on submitting the Form
        alert("Registration Successful!");
    }
    return(
      <div class="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={RegisterTheUser}>
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" />
          </div>
          <input type="submit" class="submit-btn" value="Register" />
        </form>
        {/* {age >= 18? <WelcomeMembers name="Mohan" age={age}/>: <WelcomeMembers name='Rohan' age={age}></WelcomeMembers>} */}

      </div>  
    );
}

export default RegistrationForm;