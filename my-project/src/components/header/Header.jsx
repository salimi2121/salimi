import Navmenu from "./Navmenu";  
import Navright from "./Navright";  
import flogo from "../../assets/logo-white.png";  
import Logo from "./Logo";  
import React, { useEffect, useState } from 'react';  

export default function Header() {  
    const subMenus = [  
        {  
            title: 'home',  
            options: [  
                { label: 'home restaurant ', link: '/' },  
                { label: 'home beef ', link: '/IndexBeef' },  
                { label: 'home burger ', link: '/IndexBurger' },   
                { label: 'home pizza ', link: '/IndexPizza' },  
                { label: 'home sushi ', link: '/IndexSushi' },   
            ],  
        },  
        {
            title: 'menu ',
            options: [
                { label: 'menu list one ', link: '/IndexMenu1' },
                { label: 'menu list two ', link: '/IndexMenu2' },
                { label: 'menu grid ', link: '/IndexMenuGrid' },
                { label: 'menu details ', link: '/IndexMenuDetails' },
            ],
        },
        {
            title: 'pages ',
            options: [
                { label: 'about us ', link: '/Index' },
                { label: 'our history ', link: '/Index' },
                { label: 'our chefs ', link: '/Index' },
                { label: 'our gallery ', link: '/Index' },
                { label: 'faqs ', link: '/Index' },
                { label: 'error 404 ', link: '/Index' },
            ],
        },
        {
            title: 'shop ',
            options: [
                { label: 'our shop ', link: '/Index' },
                { label: 'product details ', link: '/Index' },
                { label: 'cart ', link: '/Index' },
                { label: 'check out ', link: '/Index' },
            ],
        },
        {
            title: 'blog ',
            options: [
                { label: 'blog grid', link: '/Index' },
                { label: 'blog standard ', link: '/Index' },
                { label: 'blog details ', link: '/Index' },
            ],
        },
    ];  

    const [isVisible, setIsVisible] = useState(true);   
    const [isFixed, setIsFixed] = useState(false);  

    const handleScroll = () => {  
        const scrollY = window.scrollY;  
        if (scrollY <= 110) {  
            setIsVisible(true); // هدر را نمایش بده  
            setIsFixed(false); // هدر فیکس نیست  
        }else if (scrollY > 110 && scrollY < 190) {  
            setIsVisible(false);  
            setIsFixed(false); // هدر فیکس شده است  
        }else {  
            setIsVisible(true);  
            setIsFixed(true); // هدر فیکس شده است  
        } 
    };  

    useEffect(() => {  
        handleScroll(); // این خط برای همگام‌سازی مقدار اولیه با وضعیت اسکرول اضافه شده  
        window.addEventListener('scroll', handleScroll);  
        return () => window.removeEventListener('scroll', handleScroll);  
    }, []);  

    return (   
        
        <div className={`fixed w-full max-w-full flex xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[740px]:px-10 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4
              justify-between items-center z-10  
            ${isFixed ? 'top-0 max-[1285px]:py-4 bg-black transition-all duration-300 ease-in-out' : 'top-4 bg-transparent'}   
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-220px] transition-all duration-300 ease-in'}`}>  
            
            <Logo imageUrl={flogo} />  
            <div className="flex gap-14 text-white max-[530px]:gap-10 max-[440px]:gap-0 items-center justify-center max-[530px]:w-30">  
                <Navmenu subMenus={subMenus} />  
                <Navright subMenus={subMenus} />  
            </div>  
        </div>  
    );  
}  