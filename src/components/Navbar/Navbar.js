import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link className='link-item' to='/'>Home</Link> </li>
                    <li> <Link className='link-item' to='/blogs'>Blogs</Link> </li>
                    <li> <Link className='link-item' to='/about'>About</Link> </li>
                    {/* <li> <Link className='link-item' to='#contact'>Contact</Link> </li> */}
                </ul>
            </nav>
            <div className='social-icon'>

            </div>
        </div>
    );
};

export default Navbar;