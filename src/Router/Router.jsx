import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import App from '../App';
import Home from '../components/Pages/Home';
import AddFood from '../components/Pages/AddFood';
import ManageMyFoods from '../components/Pages/ManageMyFoods';
import AvailableFoods from '../components/Pages/AvailableFoods';
import Login from '../components/AuthPage/Login';
import SignUp from '../components/AuthPage/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/add-food',
            Component: AddFood
        },
        {
          path: '/manage-my-foods',
          Component: ManageMyFoods
        },
        {
          path: '/my-food-request',
          Component: ManageMyFoods
        },
        {
          path: '/available-foods',
          Component: AvailableFoods
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/signup',
          Component: SignUp
        }
    ]
  },
]);

export default router;