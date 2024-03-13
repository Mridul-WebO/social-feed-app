import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppRouting from './AppRouting';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouting} />
);
