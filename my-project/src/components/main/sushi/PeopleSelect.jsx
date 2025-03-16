import React, { useState } from 'react';  

const PeopleSelect = () => {  
    const [selectedPeople, setSelectedPeople] = useState('01 People');  
    const [isOpen, setIsOpen] = useState(false);  

    const options = [  
        { value: '01', label: '01 People' },  
        { value: '02', label: '02 People' },  
        { value: '03', label: '03 People' },  
        { value: '04', label: '04 People' },  
        { value: '05', label: '05 People' },  
    ];  

    const toggleDropdown = () => {  
        setIsOpen(!isOpen);  
    };  

    const handleOptionSelect = (option) => {  
        setSelectedPeople(option.label);  
        console.log(option.label);
        setIsOpen(false);  
    };  

    return (  
        <div className="w-full">  
            <div className="">  
                <div className="relative">  
                    <button   
                        onClick={toggleDropdown}  
                        className="block w-full z-50 text-white py-5 px-5 bg-transparent text-left text-lg focus:outline-none scale-100 translate-y-0 transition-all duration-150 ease-out"  
                    >  
                        {selectedPeople}  
                    </button>  
                    {isOpen && (  
                        <ul className="absolute z-50 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">  
                            {options.map((option) => (  
                                <li   
                                    key={option.value}   
                                    onClick={() => handleOptionSelect(option)}   
                                    className="cursor-pointer hover:bg-gray-200 py-2 px-4 text-black"  
                                >  
                                    {option.label}  
                                </li>  
                            ))}  
                        </ul>  
                    )}  
                </div>  
            </div>  
        </div>  
    );  
};  

export default PeopleSelect;  