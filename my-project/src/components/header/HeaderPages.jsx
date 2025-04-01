import Navmenu from "./Navmenu";
import flogo from "../../assets/beef-page/logo-main.png";
import Logo from "./Logo";
import React, { useEffect, useState } from 'react';
import HamburgerBeef from "../main/beef/HamburgerBeef";
import Cartbtn from "./Cartbtn";
import Navbtn from "./Navbtn";

export default function HeaderPages() {
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
                { label: 'about us ', link: '/IndexAbout' },
                { label: 'our history ', link: '/IndexHistory' },
                { label: 'our chefs ', link: '/IndexChef' },
                { label: 'our gallery ', link: '/IndexGallery' },
                { label: 'faqs ', link: '/IndexFaqs' },
                { label: 'error 404 ', link: '/Index404' },
            ],
        },
        {
            title: 'shop ',
            options: [
                { label: 'our shop ', link: '/IndexShop' },
                { label: 'product details ', link: '/IndexMenuDetails' },
                { label: 'cart ', link: '/IndexCart' },
                { label: 'check out ', link: '/IndexCheckout' },
            ],
        },
        {
            title: 'blog ',
            options: [
                { label: 'blog grid', link: '/IndexBloggrid' },
                { label: 'blog standard ', link: '/IndexBlogstandard' },
                { label: 'blog details ', link: '/IndexBlogdetails' },
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
        } else if (scrollY > 110 && scrollY < 190) {
            setIsVisible(false);
            setIsFixed(false); // هدر فیکس شده است  
        } else {
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
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4
              justify-between items-center z-10 bg-white max-[1285px]:px-4
            ${isFixed ? 'top-0 bg-white max-[1280px]:py-4 transition-all duration-300 ease-in-out' : 'top-0 bg-transparent'}   
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-220px] transition-all duration-300 ease-in'}`}>
            <Logo imageUrl={flogo} />
            <div className="flex xl:gap-19 text-black tracking-tighter max-[530px]:gap-10 max-[440px]:gap-0 items-center justify-center max-[530px]:w-30">
                <Navmenu subMenus={subMenus} />
                <div className="flex w-fit">
                    <div className="xl:mr-4 hidden xl:inline-block">
                        <Navbtn title="Book a table" />
                    </div>
                    <Cartbtn />
                    <HamburgerBeef subMenus={subMenus} />
                </div>
            </div>
        </div>
    );
}  