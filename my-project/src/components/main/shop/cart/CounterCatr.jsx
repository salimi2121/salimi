import React, { useState } from 'react';  

export default function CounterCart({ quantity, setQuantity }) {  
  const [count, setCount] = useState(quantity || 1); // مقدار پیش فرض را از props بگیرید  

  const increment = () => {  
    const newCount = count + 1;  
    setCount(newCount);  
    setQuantity(newCount); // به‌روزرسانی مقدار در والد  
  };  

  const decrement = () => {  
    if (count > 1) {  
      const newCount = count - 1;  
      setCount(newCount);  
      setQuantity(newCount); // به‌روزرسانی مقدار در والد  
    }  
  };  

  // اطمینان از به‌روزرسانی مقدار count زمانی که props تغییر می‌کند  
  React.useEffect(() => {  
    setCount(quantity); // اگر parent به‌روزرسانی می‌شود، count نیز به‌روزرسانی می‌شود  
  }, [quantity]);  

  return (  
    <div className='rounded-lg border border-red-700 w-full py-2 flex gap-10 max-[520px]:gap-4 justify-center items-center'>  
      <button onClick={decrement} className='text-4xl text-gray-800 cursor-pointer'>  
        -  
      </button>  
      
      <span>{count}</span>  
      
      <button onClick={increment} className='text-4xl text-gray-800 cursor-pointer'>  
        +  
      </button>  
    </div>  
  );  
};  