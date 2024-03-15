import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/home/index'
import { Register } from '../pages/register/index';
import { Login } from "../pages/login/index"

export function Routes () {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/register",
            element: <Register/>
        },
        {
            path:"/home",
            element:<Home/>
        },
    ])
    return(
        <RouterProvider router={router}>
        </RouterProvider>
    )
}