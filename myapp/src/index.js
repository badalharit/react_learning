import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import CallbackDemo from './screens/UseCallbackHook';
import FactorialCalculator from './screens/FactorialCalculator';
import LandingPage from './LandingPage';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import WelcomeMembers from './screens/WelcomeMembers';
import RegistrationForm from './screens/RegistrationForm';
import UserDetails from './screens/UserDetails';
import App from './screens/CompleteReactHooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/factorial",
    element: <FactorialCalculator/>
  },
  {
    path: "/CallbackDemo",
    element: <CallbackDemo/>
  },
  {
    path: "/Home",
    element: <Home/>
  },  
  {
    path: "/About",
    element: <About/>
  },  
  {
    path: "/Contact",
    element: <Contact/>
  },
  {
    path: "/WelcomeMembers",
    element: <WelcomeMembers/>
  },
  {
    path: "/RegistrationForm",
    element: <RegistrationForm/>
  },
  {
    path: "/UserDetails",
    element: <UserDetails/>
  },
  {
    path: "/ToDo",
    element: <App/>
  },
]);

const NavigationBar = () => {
  console.log("NavigationBar is rendering!");
  return (
    <div style={{
      display: "flex",  // Make it a horizontal navbar
      justifyContent: "center", // Center items
      gap: "10px", // Add spacing between buttons
      padding: "10px", // Add padding
      backgroundColor: "#f0f0f0" // Light background color
    }}>
      <Link to="/"><button>Landing Page</button></Link>
      <Link to="/factorial"><button>Factorial Calculator</button></Link>
      <Link to="/CallbackDemo"><button>Callback Demo</button></Link>
      <Link to="/Home"><button>Home</button></Link>
      <Link to="/About"><button>About</button></Link>
      <Link to="/Contact"><button>Contact</button></Link>
      <Link to="/WelcomeMembers"><button>Welcome Members</button></Link>
      <Link to="/RegistrationForm"><button>Registration Form</button></Link>
      <Link to="/UserDetails"><button>User Details</button></Link>
      <Link to="/ToDo"><button>To-Do App</button></Link>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <NavigationBar />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
