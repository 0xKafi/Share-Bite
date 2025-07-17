import React from 'react';import {Button} from "@/components/ui/button"
import {Package, Calendar, MapPin, User2} from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';
import axios from 'axios';

const FoodCardDetails = () => {
    const navigate = useNavigate()
    const foods = useLoaderData();
    console.log(foods)

    const date = foods.date.split('T')[0]
    const time = foods.date.split('T')[1]
    const obj = {
        "status": "requested"
    }
    const handleFoodStatus=()=>{

        axios.patch(`http://localhost:3000/foods/details/${foods._id}`, obj)
        .then(response => {
            console.log('Resource updated successfully:', response.data);
        })
        .catch(error => {
            console.error('Error updating resource:', error);
        });
        navigate('/my-food-request')
    }

    return (
        <div className='w-5/8 mx-auto flex lg:flex-row flex-col mt-10 rounded-md  lg:h-100 border-base-100 border-2'>
          <div className='lg:h-full lg:w-1/2 h-60'>
            <img className='w-full h-full rounded-md object-cover' src={foods.image} alt="foodimage" />
          </div>
          <div className='p-10'>
            <h2 className='font-bold text-3xl mb-2'>{foods.title}</h2>
          <Badge className='bg-green-500 mb-2'>Avaiable</Badge>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className='text-lg text-black/70'>
                  Quantity: {foods.quantity}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className='text-lg text-black/70'>Expires: {date}, {time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className='text-lg text-black/70'>Location: {foods.location}</span>
              </div>
                <div className="flex items-center gap-2">
                <User2 className="h-4 w-4" />
                <span className='text-lg text-black/70'>Posted By: {foods.name}</span>
              </div>
            </div>
          <Button onClick={()=>
            handleFoodStatus()} className='mt-4 bg-orange-500 hover:bg-orange-400'>Request Here</Button>
          </div>
        </div>
    );
};

export default FoodCardDetails;