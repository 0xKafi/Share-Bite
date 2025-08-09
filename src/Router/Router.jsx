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
import FoodCardDetails from '../components/FoodCard/FoodCardDetails';
import MyFoodRequest from '../components/Pages/MyFoodRequest';
import Private from '../components/AuthPage/Private';
import Error from '../components/Layout/Error';
import Blog from '../components/Pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/add-food',
            element: <Private>
            <AddFood></AddFood>
          </Private>
        },
        {
          path: '/manage-my-foods',
          element: <Private>
            <ManageMyFoods></ManageMyFoods>
          </Private>
        },
        {
          path: '/my-food-request',
          element: <Private>
            <MyFoodRequest></MyFoodRequest>
          </Private>

        },
        {
          path: '/available-foods',
          Component: AvailableFoods
        },
        {
          path: 'foods/details/:id',
          element: <Private>
            <FoodCardDetails></FoodCardDetails>
          </Private>,
          loader: ({params})=> fetch(`https://sharebite-server-kappa.vercel.app/foods/details/${params.id}`)
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/signup',
          Component: SignUp
        },
                {
          path: '/blog',
          Component: Blog
        }
    ]
  },
]);

export default router;