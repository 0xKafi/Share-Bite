import React from 'react';
import {Button} from "@/components/ui/button"
import {Package, Calendar, MapPin, User} from 'lucide-react';
import { Badge } from "@/components/ui/badge"

const FoodCard = ({foods}) => {
  console.log(foods);
  const date = foods.date.split('T')[0]
  const time = foods.date.split('T')[1]
  console.log(date)
    return (
        <div className='relative w-sm mx-auto hover:shadow-sm rounded-md h-100 border-base-100 border-2'>
          <Badge className='absolute bg-green-500 top-1 left-1'>Avaiable</Badge>
          <div className='h-50'>
            <img className='w-full h-full rounded-t-md object-cover' src={foods.image} alt="foodimage" />
          </div>
          <div className='p-5'>
            <h2 className='font-bold text-xl mb-2'>{foods.title}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                <span>
                  Quantity: {foods.quantity}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Expires: {date}, {time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{foods.location}</span>
              </div>
            </div>
          <Button className='mt-2'>View Details</Button>
          </div>
        </div>
    );
};

export default FoodCard;