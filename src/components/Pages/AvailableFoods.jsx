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
        <div className='w-11/12 lg:max-w-screen-xl mx-auto min-h-screen'>
                <div className='flex lg:hidden h-10 mt-5 items-center border border-orange-400 rounded-md pl-4'>
                    <input className='outline-none w-full text-black/60' type="text" placeholder='Search here' 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                    <button className='h-full w-12 bg-orange-400 rounded-r-sm'><Search size={20} color='white' className='mx-auto'></Search></button>   
                </div>
            <div className='flex justify-end my-5 space-x-3'>
                <div className='lg:flex hidden items-center border border-orange-400 rounded-md pl-4'>
                    <input className='outline-none text-black/60' type="text" placeholder='search here' 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                    <button className='h-full w-10 bg-orange-400 rounded-r-sm'><Search size={20} color='white' className='mx-auto'></Search></button>   
                </div>

                <div>
                    <Button onClick={handleSort}>Sort by expire date</Button>
                </div>

                <div className='lg:flex rounded-sm space-x-1 border-2 hidden'>
                    <div className={`${col? '': 'bg-orange-500 rounded-l-sm'} p-1`}>
                        <Grid2x2 color={`${col? 'orange': 'white'}`} onClick={()=> setCol(false)}  />
                    </div>
                    <div className={`${col? 'bg-orange-500 rounded-r-sm': ''} p-1 `}>
                        <Grid3x3 color={`${col? 'white': 'orange'}`} onClick={()=> setCol(true)}  />
                    </div>
                </div>
            </div>

            <div className={`grid ${col? "lg:grid-cols-4" : "lg:grid-cols-3"} grid-cols-1 gap-10`}>
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