import React, { useState, useEffect } from 'react';  

function Countdown() {  
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setTimeRemaining(calculateTimeRemaining());  
    }, 1000);  

    return () => clearInterval(intervalId);  
  }, []);  

  function calculateTimeRemaining() {  
    const targetDate = new Date('2025-09-10T00:00:00'); // تاریخ و زمان هدف  
    const now = new Date();  
    const difference = targetDate.getTime() - now.getTime();  

    if (difference <= 0) {  
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };  
    }  

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);  

    return { days, hours, minutes, seconds };  
  }  

  return (  
    <div className='grid grid-cols-4 gap-7'>  
      <div className='flex flex-col rounded-xl p-3 px-4 gap-2 bg-count capitalize'>
        <div className="flex text-3xl font-bold justify-center items-center">{timeRemaining.days}</div>
        <div className="flex justify-center items-center text-lg text-gray-400">days</div>
    </div>  
      <div className='flex flex-col rounded-xl p-3 px-4 gap-2 bg-count'>
        <div className="flex text-3xl font-bold justify-center items-center">{timeRemaining.hours}</div>
        <div className="flex justify-center items-center text-lg text-gray-400">hours</div>
    </div>  
      <div className='flex flex-col rounded-xl p-3 px-4 gap-2 bg-count'>
        <div className="flex text-3xl font-bold justify-center items-center"> {timeRemaining.minutes}</div>
        <div className="flex justify-center items-center text-lg text-gray-400">min</div>
    </div>  
      <div className='flex flex-col rounded-xl p-3 px-4 gap-2 bg-count'>
        <div className="flex text-3xl font-bold justify-center items-center"> {timeRemaining.seconds} </div>
        <div className="flex justify-center items-center text-lg text-gray-400">sec</div>
       </div>  
    </div>  
  );  
}  

export default Countdown;  