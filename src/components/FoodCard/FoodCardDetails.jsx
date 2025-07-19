import React, { useContext } from 'react';import {Button} from "@/components/ui/button"
import {Package, Calendar, MapPin, User2} from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import toast from 'react-hot-toast';


const FoodCardDetails = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const foods = useLoaderData();

    const dateTime = new Date().toLocaleDateString()

    const handleSubmit=(e)=>{
      e.preventDefault()
      const obj = {
          "status": "requested",
          "req_email" : user.email,
          "req_time" : e.target.req_date.value
      }

      axios.patch(`http://localhost:3000/foods/details/${foods._id}`, obj)
      .then(res => {
          if(res.data.modifiedCount){
            toast.success("YourFood Request Added")
          }
      })
      .catch(error => {
          toast.error(error.code);
      });
      navigate('/my-food-request')
    }

    return (
        <div className='w-5/8 mx-auto flex lg:flex-row flex-col mt-10 rounded-md  lg:h-100 border-base-100 border-2'>
          <div className='lg:h-full lg:w-1/2 h-60'>
            <img className='w-full h-full rounded-md object-cover' src={foods.image} alt="foodimage" />
          </div>
          <div className='p-10'>
            <h2 className='font-bold text-3xl mb-2'>{foods.title}</h2>
          <Badge className='bg-green-500 mb-2'>Avaiable</Badge>
            <div className="space-y-2 text-sm ">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className='text-lg text-black/70'>
                  Quantity: {foods.quantity}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className='text-lg text-black/70'>Expires: {foods.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className='text-lg text-black/70'>Location: {foods.location}</span>
              </div>
                <div className="flex items-center gap-2 mb-4">
                <User2 className="h-4 w-4" />
                <span className='text-lg text-black/70'>Donner Name: {foods.name}</span>
              </div>
            </div>

            <Dialog>
                <DialogTrigger asChild>
                  <Button>Request Here</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>Request Food Data</DialogTitle>
                  </DialogHeader>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-5'>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Food Name</Label>
                    <Input name="title" type="text" placeholder="Enter Food Name" value={foods.title} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="text">Food Image</Label>
                    <Input name="image" type="url" placeholder="Food Image URL" value={foods.image} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="number">Food ID</Label>
                    <Input name="id"  value={foods._id} disabled />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Pickup Location</Label>
                    <Input name="location" type="text" placeholder="Enter Pickup Location" value={foods.location} disabled />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="data">Request Date</Label>
                    <Input name="req_date" type="datel" value={dateTime} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="data">Expired Date</Label>
                    <Input name="date" type="date" value={foods.date} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="text">Donner Name</Label>
                    <Input name="title" type="text" placeholder="Enter Food Name" value={foods.name} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="text">Donner Email</Label>
                    <Input name="title" type="text" placeholder="Enter Food Name" value={foods.email} disabled />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Your Email</Label>
                    <Input name="title" type="text" placeholder="Enter Food Name" value={user.email} disabled />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea name="notes" type="text" defaultValue={foods.notes} />
                  </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Request</Button>
                  </DialogFooter>
                  </form>
                </DialogContent>
            </Dialog>
          </div>
        </div>
    );
};

export default FoodCardDetails;