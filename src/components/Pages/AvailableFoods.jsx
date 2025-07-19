import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Grid2x2, Grid3x3, Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Lottie from 'lottie-react';
import animation from '../../assets/loading.json'
import { Button } from "@/components/ui/button";
import toast from 'react-hot-toast';

const AvailableFoods = () => {
    const [col, setCol] = useState(true)
    const [search, setSearch] = useState(' ')
    const [newData, setNewData] = useState([])

    const fetchFoods = async () => {
        const res = await axios.get('https://sharebite-server-kappa.vercel.app/foods');
    return res.data;
    };
    const { data, isLoading, error } = useQuery({
        queryKey: ['foods'],
    queryFn: fetchFoods,
  });
  
  useEffect(() => {
  if (data) {
    setNewData(data)
  }
}, [data])


  if (isLoading) return <div className='h-screen mt-2 grid place-items-center'>
             <Lottie animationData={animation} className="max-w-lg w-full" />
        </div>;
  if (error) return <p className='text-center h-screen'>Error loading foods data</p>;
  
  const handleSort=()=>{
    axios.get('https://sharebite-server-kappa.vercel.app/foods/sorted')
    .then(res => setNewData(res.data))
    .catch(error => toast.error(error.code))
  }

    return (
        <div className='w-7/8 mx-auto min-h-screen'>
            <div className='flex justify-end my-5 space-x-3'>

                <div className='flex items-center border-2 border-orange-400 rounded-md pl-4'>
                    <input className='outline-none text-black/60' type="text" placeholder='search here' 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                    <button className='h-full w-10 bg-orange-400 rounded-r-sm'><Search size={20} color='white' className='mx-auto'></Search></button>   
                </div>
                <div>
                    <Button onClick={handleSort}>sort by expire date</Button>
                </div>
                <div className='flex bg-gray-300 rounded-sm space-x-2 border-2 border-gray-300'>
                    <div className={`${col? '': 'bg-white rounded-sm'} p-1`}>
                        <Grid2x2 color='orange' onClick={()=> setCol(false)}  />
                    </div>
                    <div className={`${col? 'bg-white rounded-sm': ''} p-1 `}>
                        <Grid3x3 color='orange' onClick={()=> setCol(true)}  />
                    </div>
                </div>
            </div>
            <div className={`grid ${col? "lg:grid-cols-3" : "lg:grid-cols-2"} grid-cols-1 gap-10`}>
                {
                    newData?.filter(food => {
                        return search.toLowerCase() === ' ' ? food : food.title.toLowerCase().includes(search.toLowerCase())
                    })
                    .map(food => (
                        <FoodCard key={food._id} foods={food} />
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableFoods;