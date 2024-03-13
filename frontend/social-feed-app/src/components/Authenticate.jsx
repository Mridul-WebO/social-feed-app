import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

function Authenticate() {
  const context = useOutletContext();

  if (!sessionStorage.getItem('userData')) {
    console.log('Authenticated');
    return <Navigate to="/sign-in" />;
    // eslint-disable-next-line no-constant-condition
  } else if (sessionStorage.getItem('userData')) {
    return <Navigate to="/feed" />;
  }

  return <Outlet context={context} />;
}

export default Authenticate;
