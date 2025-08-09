import React from 'react';
import blogData from './../../assets/blog.json'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto lg:max-w-screen-xl mb-24'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                <div className='border flex rounded-md'>
                    <img className='w-1/2 object-cover rounded-l-md' src="https://i.ibb.co.com/SwX7TKT3/image.png" alt="" />
                    <div className='p-5 flex flex-col justify-between'>
                        <h1 className='text-sm lg:text-lg font-semibold'>{blogData[0].title}</h1>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                <p className='underline cursor-pointer'>Read here</p>
                                </DialogTrigger>
                                <DialogContent className=' pt-10 h-11/12 w-full'>
                                    <h1 className='text-lg font-semibold'>{blogData[0].title}</h1>
                                    <article className='overflow-auto'>
                                        {blogData[0].content}
                                    </article>
                                </DialogContent>    
                            </form>
                        </Dialog>
                    </div>
                </div>
                <div className='border flex rounded-md'>
                    <img className='w-1/2 object-cover rounded-l-md' src="https://i.ibb.co.com/39DKkdJw/image.png" alt="" />
                    <div className='p-5 flex flex-col justify-between'>
                        <h1 className='text-sm lg:text-lg font-semibold'>{blogData[1].title}</h1>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                <p className='underline cursor-pointer'>Read here</p>
                                </DialogTrigger>
                                <DialogContent className=' pt-10 h-11/12 w-full'>
                                    <h1 className='text-lg font-semibold'>{blogData[1].title}</h1>
                                    <article className='overflow-auto'>
                                        {blogData[1].content}
                                    </article>
                                </DialogContent>    
                            </form>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;