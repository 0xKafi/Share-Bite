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
    <div className='min-h-screen mb-24'>
        <p className='text-3xl font-semibold mb-10'>Featured Task</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
            {
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