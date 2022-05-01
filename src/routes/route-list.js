import SignInSide from "../pages/SignInSlider";
import Page404 from "../pages/Page404";
import Index from "../pages/Index";
import SignUp from "../pages/SignUp";
import {Navigate} from "react-router-dom"

export const routes_list = [
    {
        path: '/',
        element:<Index/> ,
    },
    {
        path: '/login',
        element: <SignInSide />,
    },
    {
        path: '/register',
        element: <SignUp />,
    },
    {
        path: '*',
        element: <Page404 />,
    }
]
