import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import LandingPage from './LandingPage';
// import Home from './screens/Home';
// import About from './screens/About';
// import Contact from './screens/Contact';
// import WelcomeMembers from './screens/WelcomeMembers';
import RegistrationForm from './screens/RegistrationForm';
// import UserDeatils from './screens/UserDeatils';
// import { Route, Switch, Link, BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <WelcomeMembers name='Salaar'/>
    <WelcomeMembers name='Rocky'/>
    <LandingPage />
    <Home/>
    <Contact></Contact>
    <About></About> */}
    <RegistrationForm/>
    {/* <UserDeatils></UserDeatils> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
