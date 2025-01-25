import React, {useState} from "react";
// import WelcomeMembers from "./WelcomeMembers";
import '../utils/RegistrationForm.css'

function RegistrationForm() {
  /**
   * Enabling Hooks
   */
      // const [name,setName] = useState();
      const [email,setEmail] = useState(); 
      // const [password,setPassword] = useState();
  // let age = 17;
    function RegisterTheUser(e){
        e.preventDefault(); // Do not reload the screen on submitting the Form
        alert("Registration Successful!");
    }
    console.log(email)
    return(
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={RegisterTheUser}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" />
          </div>
          <input type="submit" className="submit-btn" value="Register" />
        </form>
        {/* {age >= 18? <WelcomeMembers name="Mohan" age={age}/>: <WelcomeMembers name='Rohan' age={age}></WelcomeMembers>} */}

      </div>  
    );
}

export default RegistrationForm;