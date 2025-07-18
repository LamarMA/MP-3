import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Root from './components/Root';

const router = createBrowserRouter(
  [
    { path: "*", Component: Root }
  ]
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

