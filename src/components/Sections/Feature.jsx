import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import axios from 'axios';
import { Link } from 'react-router';
import {Button} from "@/components/ui/button"

const Feature = () => {
    const [foodsData, setFoodsData] = useState()

    useEffect(()=>{
        axios.get(`https://sharebite-server-kappa.vercel.app/feature`)
        .then(res => {
            setFoodsData(res.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

    return (
    <div className='min-h-screen w-9/12 mx-auto my-10'>
        <p className='text-3xl font-semibold my-10'>Featured Task</p>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
            {
                foodsData? foodsData.map(foods =>(
                    <FoodCard key={foods._id} foods={foods}></FoodCard>
                )): ""
            }
        </div>
        <Link to='/available-foods'>
        <Button className='mt-5 px-10 block mx-auto'>View All</Button>
        </Link>
    </div>
    );
};

export default Feature;