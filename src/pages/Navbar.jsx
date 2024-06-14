import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='text-black font-bold flex text-2xl justify-between items-center px-8 max-w-[1300px] mx-auto h-24'>
            <a>Tiago Pereira</a>
            
            <ul className='hidden md:flex font-semibold'>
                <li className='p-5'><Link className='cursor-pointer' to='work' smooth={true} offset={50} duration={500}>Profile</Link></li>
                <li className='p-5'><Link className='cursor-pointer' to='about' smooth={true} offset={50} duration={500}>About</Link></li>               
                <li className='p-5'><Link className='cursor-pointer' to='experience' smooth={true} offset={50} duration={500}>Experience</Link></li>
                <li className='p-5'><Link className='cursor-pointer' to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='font-semibold text-4xl ml-12'>
                    <li className='p-5'><Link className='cursor-pointer' to='work' smooth={true} offset={50} duration={500}>Profile</Link></li>
                    <li className='p-5'><Link className='cursor-pointer' to='about' smooth={true} offset={50} duration={500}>About</Link></li>
                    <li className='p-5'><Link className='cursor-pointer' to='experience' smooth={true} offset={50} duration={500}>Experience</Link></li>
                    <li className='p-5'><Link className='cursor-pointer' to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
