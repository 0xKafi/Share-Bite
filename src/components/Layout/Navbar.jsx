import React from 'react';
import { NavLink } from 'react-router';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, MoveLeft, MoveRight } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='border border-base-100 mt-5 rounded-xl w-7/8 mx-auto'>
            <div className='mx-auto lg:p-4 p-5 flex items-center justify-between'>
                <div>
                    <p className='font-bold text-2xl text-orange-500'>ShareBite</p>
                </div>
                {/* links*/}
                <div className='space-x-8 hidden lg:block'>
                    <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to='/available-foods'>Available Foods</NavLink>

                    <>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/add-food">Add Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/manage-my-foods">Manage My Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/my-food-request">My Food Request</NavLink>
                    </>
                </div>

                {/* profile & menu */}
                <div className='lg:hidden'>
                    {/* profile icon */}
                    <div>

                    </div>
                    {/* menubar */}
                    <div>
                        <DropdownMenu>
                        <DropdownMenuTrigger><Menu></Menu></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/">Home</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/available-foods">Available Foods</NavLink></DropdownMenuItem>
                            <>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/add-food">Add Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/manage-my-foods">Manage My Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500 pb-1 border-b-1 border-orange-500": ""} to="/my-food-request">My Food Request</NavLink></DropdownMenuItem>
                            </>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>


                {/* login signup */}
                <div className='space-x-2 hidden lg:block'>
                    <Button variant="outline">Login</Button>
                    <Button className="bg-orange-500 hover:bg-orange-400"><MoveRight></MoveRight> Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;