import CallbackDemo from './screens/UseCallbackHook';
import FactorialCalculator from './screens/FactorialCalculator';
import LandingPage from './LandingPage';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import WelcomeMembers from './screens/WelcomeMembers';
import RegistrationForm from './screens/RegistrationForm';
import UserDetails from './screens/UserDetails';
import ToDoApp from './screens/CompleteReactHooks';

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
    element: <WelcomeMembers />,
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