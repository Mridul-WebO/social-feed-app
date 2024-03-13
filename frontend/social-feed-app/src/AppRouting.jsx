import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/errorPage/ErrorPage';
import SignInPage from './pages/signIn/SignInPage';
import SignUpPage from './pages/signUp/SignUpPage';
// import ProtectedRoute from "./components/ProtectedRoute";
// import Authenticate from "./components/Authenticate";
import { SnackbarProvider } from 'notistack';
import HomePage from './pages/home/HomePage';
// import Authenticate from './components/Authenticate';

const AppRouting = createBrowserRouter([
  {
    path: '/',
    element: (
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        SnackbarProvider
      >
        <App />
      </SnackbarProvider>
    ),
  },
  {
    path: 'sign-in',
    element: <SignInPage />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
  {
    path: 'feed',
    element: <HomePage />,
  },

  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default AppRouting;
