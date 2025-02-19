import React, { useState } from 'react';  

const SubMenu = ({ title, options }) => {  
    const [isOpen, setIsOpen] = useState(false);   
    
    return (  
        <div   
            className="relative inline-block text-left"   
            onMouseEnter={() => setIsOpen(true)}  
            onMouseLeave={() => setIsOpen(false)}  
        >  
            <button  
                    className="inline-flex gap-1 justify-between w-full px-2 py-4 cursor-pointer text-lg 
                    font-semibold capitalize text-white group "  
                >  
                    <span className='group-hover:text-red-700 transition-text duration-200 '>{title}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        aria-labelledby="headerArrow"
                        data-v-2b232355=""
                        className="mt-2 group-hover:text-red-700 transition-text duration-200"
                    >
                        <path
                            d="M13.354 6.35403L8.35403 11.354C8.30759 11.4005 8.25245 11.4374 8.19175 11.4626C8.13105 11.4877 8.06599 11.5007 8.00028 11.5007C7.93457 11.5007 7.86951 11.4877 7.80881 11.4626C7.74811 11.4374 7.69296 11.4005 7.64653 11.354L2.64653 6.35403C2.55271 6.26021 2.5 6.13296 2.5 6.00028C2.5 5.8676 2.55271 5.74035 2.64653 5.64653C2.74035 5.55271 2.8676 5.5 3.00028 5.5C3.13296 5.5 3.26021 5.55271 3.35403 5.64653L8.00028 10.2934L12.6465 5.64653C12.693 5.60007 12.7481 5.56322 12.8088 5.53808C12.8695 5.51294 12.9346 5.5 13.0003 5.5C13.066 5.5 13.131 5.51294 13.1917 5.53808C13.2524 5.56322 13.3076 5.60007 13.354 5.64653C13.4005 5.69298 13.4373 5.74813 13.4625 5.80883C13.4876 5.86953 13.5006 5.93458 13.5006 6.00028C13.5006 6.06598 13.4876 6.13103 13.4625 6.19173C13.4373 6.25242 13.4005 6.30757 13.354 6.35403Z"
                            fill="currentColor"
                            stroke="currentColor"
                            fillRule="evenodd"
                            strokeWidth="2"
                        ></path>
                    </svg>
            </button>
        
            {isOpen && (  
                <div className="absolute left-4 z-10 mt-0 w-56 animate-slide-up bg-white ">  
                    <div className="flex flex-col py-1 px-6 s-menu ">  
                        {options.map((option, index) => (  
                            <a   
                                key={index}   
                                href={option.link}   
                                className=" py-3 text-xl font-semibold text-gray-900 border-b-1 border-gray-300 hover:text-red-700 capitalize"   
                                role="menuitem"  
                            >  
                                {option.label}  
                            </a>  
                        ))}  
                    </div>  
                </div>  
            )}  
        </div>  
    );  
};  

export default SubMenu;  