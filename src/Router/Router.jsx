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
          path: '/my-food-request/:email',
          Component: MyFoodRequest,

        },
        {
          path: '/available-foods',
          Component: AvailableFoods,
          loader: ()=> fetch('http://localhost:3000/foods')
        },
        {
          path: 'foods/details/:id',
          Component: FoodCardDetails,
          loader: ({params})=> fetch(`http://localhost:3000/foods/details/${params.id}`)
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