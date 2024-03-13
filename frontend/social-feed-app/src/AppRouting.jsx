import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/errorPage/ErrorPage';
import SignInPage from './pages/signIn/SignInPage';
import SignUpPage from './pages/signUp/SignUpPage';
// import ProtectedRoute from "./components/ProtectedRoute";
// import Authenticate from "./components/Authenticate";
import { SnackbarProvider } from 'notistack';
import HomePage from './pages/home/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import Authenticate from './components/Authenticate';

const AppRouting = createBrowserRouter([

  {
    path:'/',
    element:
    <SnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    SnackbarProvider
  >
    <Provider store={store}>

    <App/>
    </Provider>
  </SnackbarProvider>
    ,
    children:[
      {
        index:true,
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
    
    ]
  },
 
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default AppRouting;
