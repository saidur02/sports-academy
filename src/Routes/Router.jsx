import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import Users from "../Pages/Dashboard/Users/Users";
import AllClasses from "../Pages/Dashboard/AllClasses/AllClasses";
import Instructor from "../Pages/Instructor/Instructor";
import StudentClass from "../Pages/Dashboard/StudentClass/StudentClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import NotFoundPage from "../Pages/NotFoundPage/NotFound";






 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'classes',
            element:<Classes></Classes>
        },
        {
            path:'instructors',
            element:<Instructor></Instructor>
        }
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'myclass',
                element:<MyClass></MyClass>
            },
            {
                path:'users',
                element:<Users></Users>
            },
            {
                path:'allclasses',
                element:<AllClasses></AllClasses>
            },
            {
                path:'studentclass',
                element:<StudentClass></StudentClass>
            },
            {
                path:'enrollclass',
                element:<EnrolledClass></EnrolledClass>
            },
            {
              path: '*',
              element:<NotFoundPage></NotFoundPage>
            }
        ]
    }
  ]);
  