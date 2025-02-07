import CallbackDemo from './components/UseCallbackHook';
import FactorialCalculator from './components/FactorialCalculator';
import LandingPage from './LandingPage';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WelcomeMembers from './components/WelcomeMembers';
import RegistrationForm from './components/RegistrationForm';
import UserDetails from './components/UserDetails';
import ToDoApp from './components/CompleteReactHooks';

const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/factorial',
    element: <FactorialCalculator />,
  },
  {
    path: '/callback-demo',
    element: <CallbackDemo />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/welcome-members',
    element: <WelcomeMembers name='Badal Harit' age='29'/>,
  },
  {
    path: '/registration-form',
    element: <RegistrationForm />,
  },
  {
    path: '/user-details',
    element: <UserDetails />,
  },
  {
    path: '/todo',
    element: <ToDoApp />,
  },
];

export default routes;