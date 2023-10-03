import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Ingresar } from "../pages/Ingresar"
import { Cola } from "../pages/Cola"
import { CrearTicket } from "../pages/CrearTicket"
import { Escritorio } from "../pages/Escritorio"
import { RouterPages } from "./RouterPages"
 
const router = createBrowserRouter([
    {
        path:'/',
        element:<RouterPages />,
        children:[
            { path:'/login', element: <Ingresar/> },
            { path:'/cola',  element:  <Cola /> },
            { path:'/crear', element: <CrearTicket /> },
            { path:'/escritorio', element: <Escritorio /> },
            { path:'/*', element:<Navigate to='/login' replace/>}
        ]
    },
])
 
export const AppRouter = () => {
 
  return (
    <>
        <RouterProvider router={ router } />
    </>
  )
}