import React, { useContext } from 'react';
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
    
    axios.get(`http://localhost:3000/my-food-request?email=${user.email}`)
    .then(res => {
        console.log(res.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    return (
        <div className='w-7/8 mx-auto mt-10'>
            <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </div>
    );
};

export default MyFoodRequest;