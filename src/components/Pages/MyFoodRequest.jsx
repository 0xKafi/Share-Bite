import React, { useContext, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';


const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState(null)
    
    useEffect(()=>{
        axios.get(`https://sharebite-server-kappa.vercel.app/my-food-request`, {
            headers:{
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
        .then(res => {
            setData(res.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [user])

    return (
        <div className='w-11/12 mb-24 lg:max-w-screen-xl mx-auto mt-10'>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead >Donner Name</TableHead>
                <TableHead >Pickup Location</TableHead>
                <TableHead >Expire Date</TableHead>
                <TableHead className='text-right'>Request Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data === null?
                    Array.from({ length: 5 }).map(() => (
                        <TableRow className='py-50'>
                            <TableCell><div className="h-6 bg-gray-300 rounded w-3/4"></div></TableCell>
                            <TableCell><div className="h-6 bg-gray-300 rounded w-3/4"></div></TableCell>
                            <TableCell><div className="h-6 bg-gray-300 rounded w-3/4"></div></TableCell>
                            <TableCell><div className="h-6 bg-gray-300 rounded w-3/4"></div></TableCell>
                            <TableCell><div className="h-6 bg-gray-300 rounded w-3/4"></div></TableCell>
                        </TableRow>
                        )):
                    data?.map(data=>
                        <>
                            <TableRow>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.location}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell className='text-right'>{data.req_time}</TableCell>
                            </TableRow>
                        </>
                    )

                }
            </TableBody>
            </Table>
        </div>
    );
};

export default MyFoodRequest;