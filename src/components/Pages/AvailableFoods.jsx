import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../FoodCard/FoodCard';
import { Grid2x2, Grid3x3 } from 'lucide-react';

const AvailableFoods = () => {
    const [col, setCol] = useState(3)
    const availableFoods = useLoaderData();

    return (
        <div className='w-7/8 mx-auto min-h-screen'>
            <div className='flex justify-between my-5'>
                <div>

                </div>
                <div className='flex bg-gray-300 rounded-sm space-x-2 border-2 border-gray-300'>
                    <div className={`${col === 2? 'bg-white rounded-sm': ''} p-1`}>
                        <Grid2x2 color='orange' onClick={()=> setCol(2)}  />
                    </div>
                    <div className={`${col === 3? 'bg-white rounded-sm': ''} p-1 `}>
                        <Grid3x3 color='orange' onClick={()=> setCol(3)}  />
                    </div>
                </div>
            </div>
            <div className={`grid grid-cols-${col} gap-10`}>
                {
                    availableFoods?.filter(food => food.status === 'available')
                    .map(food => (
                        <FoodCard key={food._id} foods={food} />
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableFoods;