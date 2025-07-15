import React from 'react';
import { NavLink } from 'react-router';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='border border-base-100 mt-5 rounded-xl w-7/8 mx-auto'>
            <div className='mx-auto lg:p-4 p-5 flex items-center justify-between'>
                <div>
                    <p className='font-bold text-2xl'>ShareBite</p>
                </div>
                {/* links*/}
                <div className='space-x-8 hidden lg:block'>
                    <NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to='/available-foods'>Available Foods</NavLink>

                    <>
                        <NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/add-food">Add Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/manage-my-foods">Manage My Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/my-food-request">My Food Request</NavLink>
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
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/">Home</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/available-foods">Available Foods</NavLink></DropdownMenuItem>
                            <>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/add-food">Add Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/manage-my-foods">Manage My Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium pb-1 border-b-1 border-black": ""} to="/my-food-request">My Food Request</NavLink></DropdownMenuItem>
                            </>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>


                {/* login signup */}
                <div className='space-x-2 hidden lg:block'>
                    <Button>Login</Button>
                    <Button variant="outline">Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;