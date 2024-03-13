// import { Button } from '@mui/material';
// import { useSnackbar } from 'notistack';
import CustomAppBar from './components/CustomAppBar';
import { Outlet } from 'react-router-dom';

function App() {
  // const { enqueueSnackbar } = useSnackbar();

  // const handleVariant = (variant) => {
  //   enqueueSnackbar('This is it!!', { variant });
  // };

  return (
    <>
      {!!sessionStorage.getItem('userData') && <CustomAppBar />}

      <Outlet />
    </>
  );
}

export default App;
