import React, { useState , useEffect } from 'react';
import Logo from '../../header/Logo';
import flogo from "../../../assets/beef-page/logo-main.png";
import Dropdown from '../../header/Dropdown';
import Navbtn from '../../header/Navbtn';

const HamburgerMenu = ({ subMenus = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const toggleMenu = () => {
        if (!isOpen) {
            setAnimationClass('animate-slide-right');
        } else {
            setAnimationClass('animate-slide-left');
        }
        setIsOpen(!isOpen);
    };
    useEffect(() => {  
        if (isOpen) {
            setAnimationClass('animate-slide-right');
        } else {
            const timer = setTimeout(() => {
                setAnimationClass('');
            },300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div className='xl:hidden'>
            <button className="flex flex-col justify-center items-center bg-transparent  border-1 border-black rounded-md 
            cursor-pointer p-0 ml-4 w-[46px] h-[43px]" onClick={toggleMenu}>
                <span className={`barbeef ${isOpen ? 'toggle' : ''}`}></span>
                <span className={`barbeef ${isOpen ? 'toggle' : ''}`}></span>
                <span className={`barbeef ${isOpen ? 'toggle' : ''}`}></span>
            </button>
            
                <div className={`menu ${animationClass}`}>
                    <div className='flex justify-center items-center my-5'>
                        <Logo imageUrl={flogo} />
                    </div>
                    <div className="flex flex-col  mt-1">
                        <div className='text-black'>
                            <Dropdown subMenus={subMenus} />
                        </div>

                        <button className='px-3'>
                            <a href='/IndexContact' className="flex cursor-pointer font-bold hover:text-red-700 transition-text duration-300">
                                <span>Contact</span>
                            </a>
                        </button>
                        <div className='flex text-white px-7 mt-16'>
                            <Navbtn title="book a table" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HamburgerMenu;