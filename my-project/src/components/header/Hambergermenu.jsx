import React, { useState } from 'react';
import Logo from './Logo';
import flogo from "../../assets/logo-main.png";
import Dropdown from './Dropdown';
import Navbtn from './Navbtn';

const HamburgerMenu = ({ subMenus = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='xl:hidden mr-4 '>
            <button className="hamburger-button" onClick={toggleMenu}>
                <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
            </button>
            {isOpen && (
                <div className="menu w-72 h-dvh">
                    <div className='flex justify-center items-center my-5'>
                        <Logo imageUrl={flogo} />
                    </div>
                    <div className="flex flex-col  mt-1">
                        <div className='text-black'>
                            <Dropdown subMenus={subMenus} />
                        </div>

                        <button className='px-3'>
                            <a className="flex cursor-pointer font-bold hover:text-red-700 transition-text duration-300">
                                <span>Contact</span>
                            </a>
                        </button>
                        <div className='flex text-white px-7 mt-16'>
                            <Navbtn />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;