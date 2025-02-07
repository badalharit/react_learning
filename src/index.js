import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import routes from './routes';

// Create a root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app to the root element
root.render(
  <React.StrictMode>
    {/* Create a BrowserRouter component to manage client-side routing */}
    <BrowserRouter>
      <div>
    {/* Use the map function to iterate over the routes array */}
          {routes.map(
              (route) => (
                  // Use the Link component to create a link to the current route
                  <Link to={route.path}>
                    {/*  Display the link text, removing the leading '/' character */}
                    <button>{route.path === '/' ? 'Home' : route.path.slice(1)}</button>
                  </Link>
            ))}
    {/* Create a Routes component to define the routes */}
        <Routes>
    {/* Use the map function to iterate over the routes array again */}
        {routes.map((route, index) => {
          // Log the route index and path to the console
            console.log(`Processing route ${index}: ${route.path}`);
          // Return a Route component for the current route
            return (
          //  Use the key prop to assign a unique key to each Route component 
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
