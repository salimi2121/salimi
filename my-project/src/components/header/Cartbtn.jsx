import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../../DataContext';
import useOutsideClick from '../useOutsideClick';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa'; // آیکن ضربدر
import Navbtn from './Navbtn';
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cartbtn() {
    const { foods } = useData();
    const filteredSushi = foods.filter(food => food.category === 'sushi-cart');
    const [cartItems, setCartItems] = useState(filteredSushi.slice(-5));
    const [isOpen, setIsOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // مدیریت تغییرات isOpen و تنظیم animationClass
    useEffect(() => {
        if (isOpen) {
            setAnimationClass('animate-slidecart-right');
        } else {
            setAnimationClass('animate-slidecart-left');
        }
    }, [isOpen]);

    // مدیریت کلیک خارج از منو
    useOutsideClick(menuRef, () => {
        if (isOpen) {
            setAnimationClass('animate-slidecart-left'); // شروع انیمیشن بستن
            const timer = setTimeout(() => {
                setIsOpen(false); // بستن منو بعد از انیمیشن
            }, 300); // مدت زمان انیمیشن
            return () => clearTimeout(timer); // پاک کردن تایمر در صورت unmount شدن
        }
    });

    const handleClose = () => {
        setAnimationClass('animate-slidecart-left'); // شروع انیمیشن بستن
        const timer = setTimeout(() => {
            setIsOpen(false); // بستن منو بعد از انیمیشن
        }, 300); // مدت زمان انیمیشن    
    };

    // تابع حذف آیتم از سبد خرید
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className='flex justify-center items-center' ref={menuRef} >
            {/* دکمه سبد خرید */}
            <button
                className="xl:rounded-xl rounded-xl w-full h-full bg-green-600 xl:p-5 p-3 text-white text-xl font-semiboldbold cursor-pointer"
                onClick={toggleMenu}
            >
                <AiOutlineShoppingCart />
            </button>

            {/* منو */}
            {isOpen && (
                <div className={`menu-cartbtn ${animationClass} fixed top-0 right-0 h-full bg-white z-50 w-96 `}>
                    <div className='flex justify-between border-b border-gray-300 p-7 pt-10'>
                        <h1 className='capitalize font-bold text-xl tracking-tighter'>my cart</h1>
                        <button
                            onClick={handleClose}
                            className="border border-red-700 text-red-700 text-md px-1 cursor-pointer"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {cartItems.length > 0 ? (
                            cartItems.map(sushi => (
                                <div key={sushi.id} className="relative flex flex-col gap-2 p-7 bg-white border-b border-gray-300">
                                    <div className='flex justify-between items-center gap-4'>
                                        <div className='flex gap-4'>
                                            <div className="flex justify-center items-center rounded-md">
                                                <img src={sushi.image} alt="" className='w-23 h-20 rounded-xl' />
                                            </div>
                                            <div className="flex flex-col gap-1  justify-center">
                                                <h1 className='capitalize text-gray-800 font-bold text-sm'>{sushi.title}</h1>
                                                <p className='text-gray-600 text-lg'>1 × {sushi.price}</p>
                                            </div>
                                        </div>
                                        {/* دکمه حذف با اتصال به تابع removeItem */}
                                        <div className='cursor-pointer' onClick={() => removeItem(sushi.id)}>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No sushi items available.</p>
                        )}
                    </div>
                    <div className="mt-5 px-4 py-15">
                        <Navbtn title="proceed to checkout" />
                    </div>
                </div>
            )}
        </div>
    );
}