import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, MoveLeft, MoveRight } from 'lucide-react';
import AuthContext from '../Auth/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
    const {user, signOutUser, loading} = useContext(AuthContext);

    const handleSignOut=()=>{
        signOutUser()
    }

    return (
        <div className='border border-base-100 mt-5 rounded-xl w-7/8 mx-auto'>
            <div className='mx-auto lg:p-4 p-5 flex items-center justify-between'>
                <div>
                    <p className='font-bold text-2xl text-orange-500'>ShareBite</p>
                </div>
                {/* links*/}
                <div className='space-x-8 hidden lg:block'>
                    <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to='/available-foods'>Available Foods</NavLink>
                    {
                        user? 
                    <>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/add-food">Add Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/manage-my-foods">Manage My Food</NavLink>
                        <NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/my-food-request">My Food Request</NavLink>
                    </>: ""
                    }
                </div>

                {/* profile & menu */}
                <div className='lg:hidden flex items-center space-x-2'>
                    {/* profile icon */}
                    <div>
                        {
                            loading?<>
                                  <Avatar>
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                            </> :
                            user? 
                            <>
                        <Avatar>
                            <AvatarImage src={user.photoURL}/>
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                            </>:""
                        }
                    </div>
                    {/* menubar */}
                    <div className='mt-1'>
                        <DropdownMenu>
                        <DropdownMenuTrigger><Menu size={35}></Menu></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/">Home</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/available-foods">Available Foods</NavLink></DropdownMenuItem>
                            <>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/add-food">Add Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/manage-my-foods">Manage My Food</NavLink></DropdownMenuItem>
                            <DropdownMenuItem><NavLink className={({isActive})=> isActive ? "font-medium text-orange-500": ""} to="/my-food-request">My Food Request</NavLink></DropdownMenuItem>
                            {
                                user?
                            <Button onClick={handleSignOut} className="bg-orange-500 hover:bg-orange-400 py-2 ml-2">Sign Out</Button>
                                :<>
                                    <DropdownMenuItem><Link to='/login'>
                        <Button variant="outline">Login</Button>
                        </Link></DropdownMenuItem>
                                    <DropdownMenuItem>
                                    <Link to='/signup'>
                        <Button className="bg-orange-500 hover:bg-orange-400"><MoveRight></MoveRight> Sign Up</Button>
                        </Link>
                                    </DropdownMenuItem>
                                </>
                            }
                            </>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>


                {/* login signup */}
                <div className='hidden lg:block'>
                {
                    user? 
                    <div className='flex space-x-4 items-center'>
                        <Link to='/'>
                            <Button onClick={handleSignOut} className="bg-orange-500 hover:bg-orange-400">Sign Out</Button>
                        </Link>
                        <Avatar>
                            <img src={user.photoURL}/>
                        </Avatar>
                    </div>:
                    <>
                        <div className='space-x-2 hidden lg:block'>
                        <Link to='/login'>
                        <Button variant="outline">Login</Button>
                        </Link>
                        <Link to='/signup'>
                        <Button className="bg-orange-500 hover:bg-orange-400">Sign Up</Button>
                        </Link>
                    </div>
                    </>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;