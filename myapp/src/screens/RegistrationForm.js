import React from "react";
import WelcomeMembers from "./WelcomeMembers";

function RegistrationForm() {
  let age = 17;
    function RegisterTheUser(e){
        e.preventDefault(); // Do not reload the screen on submitting the Form
        alert("Registration Successful!");
    }
    return(
      <div>
        <h1>Registration Form</h1>
        <form>
            <label>Username: </label>
            <input type="text" name="username" required/>
            <br/>
            <label>Age: </label>
            <input type="number" name="age" required/>
            <br/>
            <label>Password: </label>
            <input type="password" name="password" required/>
            <br/>
            <label>Confirm Password: </label>
            <input type="password" name="confirm_password" required/>
            <br/>
            <input type="submit" onClick={RegisterTheUser} value="Register"/>
        </form>
        {age >= 18? <WelcomeMembers name="Mohan" age={age}/>: <WelcomeMembers name='Rohan' age={age}></WelcomeMembers>}
          
      </div>  
    );
}

export default RegistrationForm;