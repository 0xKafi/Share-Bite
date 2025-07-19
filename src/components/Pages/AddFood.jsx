import React, { useContext } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AuthContext from '../Auth/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddFood = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const dataObj = Object.fromEntries(formData.entries());
        dataObj.name = user.displayName
        dataObj.email = user.email
        dataObj.status = "available"

        axios.post('http://localhost:3000/foods', dataObj)
        .then(() => {
          toast.success("Food Added Successfully")
        })
        .catch(error =>{
          toast.error(`${error.code}`)
        })

        e.target.reset()
    }
    return (
        <div className='w-7/8 mx-auto h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='lg:w-2/3 lg:mx-aut'>
                <div className='max-w-lg p-5 shadow rounded-lg mx-auto'>
                  <div className="grid gap-2 mb-4">
                    <Label htmlFor="text">Food Name</Label>
                    <Input name="title" type="text" placeholder="Enter Food Name" required />
                  </div>
                    <div className="grid gap-2 mb-4">
                    <Label htmlFor="text">Food Image</Label>
                    <Input name="image" type="url" placeholder="Food Image URL" required />
                  </div>
                    <div className="grid gap-2 mb-4">
                    <Label htmlFor="text">Food Quantity</Label>
                    <Input name="quantity" type="number" placeholder="Food Quantity" required />
                  </div>
                  <div className="grid gap-2 mb-4">
                    <Label htmlFor="location">Pickup Location</Label>
                    <Input name="location" type="text" placeholder="Enter Pickup Location" required />
                  </div>
                    <div className="grid gap-2 mb-4">
                    <Label htmlFor="date">Expired Date</Label>
                    <Input name="date" type="date" required />
                  </div>
                    <div className="grid gap-2 mb-4">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea name="notes" type="text" />
                  </div>
                <Button className="col-span-2">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;