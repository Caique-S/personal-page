import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Register } from './pages/register';
import { Login } from './pages/login';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/home",
      element: <Home/>
    },
    {
      path:"/register",
      element: <Register/>
    },
  ])
  return (
  <RouterProvider router={router}>
  </RouterProvider>
  );
}

export default App;
