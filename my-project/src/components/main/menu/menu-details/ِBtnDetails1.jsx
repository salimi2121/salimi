import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


export default function BtnDetails1() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Small', 'medium', 'large'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {

    setSelectedOption(option === 'Small' ? null : option);
    setIsOpen(false);

  };

  return (
    <div className='relative w-full'>
      <div onClick={toggleDropdown} className='rounded-lg bg-gray-900 text-lg px-5 py-3 leading-9 w-full text-white flex justify-between items-center capitalize' >
        {selectedOption || 'variation size'}
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className='absolute top-full left-0 bg-white w-full border border-gray-200 rounded-lg'>
          {options.map((option, index) => (
            <div key={index}
              onClick={() => handleOptionClick(option)}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${option === selectedOption ? 'bg-gray-100 font-medium' : ''
                }`}

            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

