import React, { useState } from 'react';  

const TimeSelect = () => {  
    const [selectedTime, setSelectedTime] = useState('Time');  
    const [isOpen, setIsOpen] = useState(false);  

    const times = [  
        '10:00am - 12:00Pm',  
        '11:00Pm - 02:00Pm',  
        '02:00pm - 04:00Pm',  
        '04:00pm - 07:00Pm',  
        '06:00am - 10:00Pm'  
    ];  

    const toggleDropdown = () => {  
        setIsOpen(!isOpen);  
    };  

    const handleTimeSelect = (time) => {  
        setSelectedTime(time);  
        setIsOpen(false);  
    };  

    return (  
        <div className="w-full">  
            <div className="">  
                <div className="relative">  
                    <button   
                        onClick={toggleDropdown}  
                        className="block w-full border border-gray-600 rounded-xl text-white py-5 px-4 bg-transparent text-left focus:outline-none "  
                    >  
                        {selectedTime}  
                    </button>  
                    {isOpen && (  
                        <ul className="absolute z-40 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg scale-100 translate-y-0 transition-all duration-150 ease-out">  
                            {times.map((time, index) => (  
                                <li   
                                    key={index}   
                                    onClick={() => handleTimeSelect(time)}   
                                    className="cursor-pointer hover:bg-gray-200 py-2 px-4"  
                                >  
                                    {time}  
                                </li>  
                            ))}  
                        </ul>  
                    )}  
                </div>  
            </div>  
        </div>  
    );  
};  

export default TimeSelect;  