import React, { useContext, useEffect, useState } from 'react';
import {
    Table,
    TableBody, TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';
import { Edit, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from 'react-hot-toast';

const ManageMyFoods = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:3000/manage-my-food`,{
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

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3000/manage-my-food/${id}`)
        .then(() => {
            toast.success("Deleted Successfully")
        })
        .catch(error => {
            toast.error(error.code)
        });
    }

    const handleUpdate=(e, id)=>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData.entries());

        axios.patch(`http://localhost:3000/manage-my-food/${id}`, obj)
        .then(res => {
            if(res.data.modifiedCount){
                toast.success("Data Update Successfully")
            }
        })
        .catch(error => {
            toast.error(error.code)
        });
    }

    return (
        <div className='w-7/8 mx-auto mt-10'>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead >Food Name</TableHead>
                <TableHead >Quantity</TableHead>
                <TableHead >Expire Date</TableHead>
                <TableHead >Status</TableHead>
                <TableHead ></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.map(data=>
                        <>
                            <TableRow>
                            <TableCell>{data.title}</TableCell>
                            <TableCell>{data.quantity}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell>{data.status}</TableCell>
                            <TableCell className='flex space-x-2'>
                              <div className='hover:bg-gray-900 hover:text-white p-2 w-8 rounded-sm'>
                            <Dialog>
                                <DialogTrigger asChild>
                                <Edit className='w-4 h-4'></Edit>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                            <form onSubmit={(e)=>handleUpdate(e, data._id)}>
                                <DialogHeader>
                                    <DialogTitle>Request Food Data</DialogTitle>
                                </DialogHeader>
                                <div className='grid gap-4 my-5'>
                                <div className="grid gap-2">
                                    <Label htmlFor="text">Food Name</Label>
                                    <Input name="title" type="text" placeholder="Enter Food Name" defaultValue={data.title} />
                                </div>
                                    <div className="grid gap-2">
                                    <Label htmlFor="text">Food Image</Label>
                                    <Input name="image" type="url" placeholder="Food Image URL" defaultValue={data.image} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="text">Food Quantity</Label>
                                    <Input name="quantity" type="number" placeholder="Enter Food Quantity"  defaultValue={data.quantity}/>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="location">Pickup Location</Label>
                                    <Input name="location" type="text" placeholder="Enter Pickup Location" defaultValue={data.location} />
                                </div>
                                    <div className="grid gap-2">
                                    <Label htmlFor="date">Expired Date</Label>
                                    <Input name="date" type="date" defaultValue={data.date}  />
                                </div>
                                    <div className="grid gap-2">
                                    <Label htmlFor="notes">Additional Notes</Label>
                                    <Textarea name="notes" type="text" defaultValue={data.notes}/>
                                </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                    <Button type="submit">Save Changes</Button>
                                    </DialogClose>
                                </DialogFooter>
                                </form>
                                </DialogContent>
                            </Dialog>
                              </div>


                            <div className='hover:bg-gray-900 hover:text-white p-2 w-8 rounded-sm'>
                                    <Dialog>
                                        <DialogTrigger><Trash className='w-4 h-4'></Trash></DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            </DialogHeader>
                                            <DialogFooter className="mt-5">
                                            <DialogClose>
                                                <Button variant="outline">No, Cancel</Button>
                                            </DialogClose>
                                            <DialogClose>
                                                <Button variant="destructive" onClick={()=>{
                                                    handleDelete(data._id)
                                                }}>Yes, Continue</Button>
                                            </DialogClose>
                                            </DialogFooter>
       
                                        </DialogContent>
                                </Dialog>
                            </div>
                            </TableCell>
                            </TableRow>
                        </>
                    )
                }
            </TableBody>
            </Table>
        </div>
    );
};

export default ManageMyFoods;