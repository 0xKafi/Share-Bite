import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import axios from 'axios';
import { Link } from 'react-router';
import {Button} from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

const Feature = () => {
    const [foodsData, setFoodsData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://sharebite-server-kappa.vercel.app/feature`)
        .then(res => {
            setFoodsData(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

    return (
    <div className='mb-24'>
        <p className='text-3xl font-semibold mb-10'>Featured Task</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                loading?
                 Array.from({ length: 4 * 2 }).map(() => (
                  <div className="flex flex-col space-y-8">
                  <Skeleton className="h-[263px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                      <Skeleton className="h-6 w-[250px]" />
                      <Skeleton className="h-8 w-[200px]" />
                      <Skeleton className="h-8 w-[200px]" />
                  </div>
                  </div>  
                  )) :
                foodsData? foodsData.map(foods =>(
                    <FoodCard key={foods._id} foods={foods}></FoodCard>
                )): ""
            }
        </div>
        <Link to='/available-foods'>
        <Button className='mt-10 px-10 block mx-auto'>View All</Button>
        </Link>
    </div>
    );
};

export default Feature;