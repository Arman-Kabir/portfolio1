import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-[10%] py-3 bg-[#00263C]'>
            <div>
                <h3 className=' font-bold text-white text-2xl'>Arman kabir Portfolio</h3>
            </div>

            <div className='space-x-5 text-white flex items-center'>
                <span className='hover:font-bold text-xl hover:text-red-300'><Link className='' to='/'>Home</Link></span>
                <span className='hover:font-bold text-xl hover:text-red-300'><Link className='' to='/blogs'>Blogs</Link></span>
                <span className='hover:font-bold text-xl hover:text-red-300'><Link className='' to='/about'>About</Link></span>

                <div className='space-x-1'>
                    <span>git</span>
                    <span>link</span>
                    <span>gmail</span>
                </div>
            </div>

        </div>
    );
};

export default Navbar;