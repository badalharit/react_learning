import React, {useEffect, useState} from "react";
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
      const [countries, setCountries] = useState([]);
      const [callingCode, setCallingCode] = useState();
      const [phoneNumber, setPhoneNumber] = useState("");

      useEffect(() => { // Hook: It runs on Screen Render
        fetch("https://restcountries.com/v3.1/all") // Callback Function
          .then(response => response.json())
          .then(data => setCountries(data.map(country => country.name.common))); 
      }, [] // Dependency Array - We provide this with a state variable here or any other variable that are changing in nature. It hits a re-render
    );

      useEffect(() => {
        if (country) {
          fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,idd`) // Callback Function
            .then(response => response.json())
            .then(data => setCallingCode(data[0].idd.root+data[0].idd.suffixes[0]+'-'))
        }
      }, [country])
    
    
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };

    function RegisterTheUser(e){
        e.preventDefault(); // Do not reload the screen on submitting the Form
        alert("Registration Successful!");
    }

    console.log(name+':'+email+':'+password+':'+cnfrmPassword+':'+country+':'+callingCode+phoneNumber)
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
          <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country" name="country" value={country} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <select className="country-code" disabled>
            <option value={callingCode}>{callingCode} ({country})</option>
          </select>
          <input type="text" id="phone_number" name="phone_number" placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
          <input type="submit" className="submit-btn" value="Register" />
        </form>
        {/* {age >= 18? <WelcomeMembers name="Mohan" age={age}/>: <WelcomeMembers name='Rohan' age={age}></WelcomeMembers>} */}

      </div>  
    );
}

export default RegistrationForm;