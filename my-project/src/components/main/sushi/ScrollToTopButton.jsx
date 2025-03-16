import React, { useState, useEffect } from 'react';  
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {  
    const [isVisible, setIsVisible] = useState(false);  

    // نمایش دکمه بعد از اسکرول به پایین  
    useEffect(() => {  
      const handleScroll = () => {  
        if (window.pageYOffset > 300) { // بعد از 300 پیکسل اسکرول  
          setIsVisible(true);  
        } else {  
          setIsVisible(false);  
        }  
      };  
      window.addEventListener('scroll', handleScroll);  
      return () => {  
        window.removeEventListener('scroll', handleScroll);  
      };  
    }, []);
    const scrollToTop = () => {  
        window.scrollTo({  
          top: 0,  
          behavior: 'smooth' // برای اسکرول نرم  
        });  
      };   return (  
        <button  className='fixed flex justify-center items-center bottom-5 right-5 text-md bg-red-700 text-white rounded-full p-5 cursor-pointer z-20 '
          onClick={scrollToTop}  
          style={{  
            display: isVisible ? 'block' : 'none',  
          }}  
        ><FaChevronUp /></button>  
      );    
}