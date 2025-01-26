import React, {useEffect, useState} from "react";
// import WelcomeMembers from "./WelcomeMembers";
import '../utils/RegistrationForm.css'

function RegistrationForm() {
  /**
   * Enabling Hooks
   */
      const [name,setName] = useState(); // Hook: It manage the states
      const [email,setEmail] = useState(); 
      const [password,setPassword] = useState();
      const [cnfrmPassword,confirmPassword] = useState();
      const [country,setCountry] = useState();

      useEffect( // Hook: It runs on Screen Render
        () => {setCountry('INDIA')}, // Callback Function
        [] // Dependency Array - We provide this with a state variable here or any other variable that are chenging in nature. It hits a re-render
      )


  // let age = 17;
    function RegisterTheUser(e){
        e.preventDefault(); // Do not reload the screen on submitting the Form
        alert("Registration Successful!");
    }

    console.log(name+':'+email+':'+password+':'+cnfrmPassword+':'+country)
    return(
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={RegisterTheUser}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}            
            />
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
            <input type="password" id="password" name="password" placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" 
              value={cnfrmPassword} 
              onChange={(e) => confirmPassword(e.target.value)}            
            />
          </div>
          <input type="submit" className="submit-btn" value="Register" />
        </form>
        {/* {age >= 18? <WelcomeMembers name="Mohan" age={age}/>: <WelcomeMembers name='Rohan' age={age}></WelcomeMembers>} */}

      </div>  
    );
}

export default RegistrationForm;