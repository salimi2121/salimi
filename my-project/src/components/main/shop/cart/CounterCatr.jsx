import React, { useState } from 'react';

export default function CounterCart(){
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <div className='rounded-lg border border-red-700 w-full py-2 flex gap-10 max-[520px]:gap-4 justify-center items-center' >
      <button onClick={decrement} className='text-4xl text-gray-800 cursor-pointer' >
        -
      </button>
      
      <span>{count}</span>
      
      <button onClick={increment} className='text-4xl text-gray-800 cursor-pointer' >
        +
      </button>
    </div>
  );
};

