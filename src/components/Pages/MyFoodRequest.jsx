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
        <div className='w-9/12 mx-auto mt-10 min-h-screen'>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead >Donner Name</TableHead>
                <TableHead >Pickup Location</TableHead>
                <TableHead >Expire Date</TableHead>
                <TableHead >Request Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.map(data=>
                        <>
                            <TableRow>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.location}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell>{data.req_time}</TableCell>
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