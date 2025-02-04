import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CallbackDemo from './screens/UseCallbackHook';
import FactorialCalculator from './screens/FactorialCalculator';
import LandingPage from './LandingPage';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import WelcomeMembers from './screens/WelcomeMembers';
import RegistrationForm from './screens/RegistrationForm';
import UserDeatils from './screens/UserDeatils';
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
    path: "/UserDeatils",
    element: <UserDeatils/>
  },
  {
    path: "/ToDo",
    element: <App/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
