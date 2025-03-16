import React from 'react';  
import { useData } from '../../../DataResContext';  

// کامپوننت MenuDisplay  
const MenuItemRes = () => {  
    const { resfoods } = useData();  

    return (  
        <div className="max-w-5xl mx-auto">  
            <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 gap-7 ">  
                {resfoods.map(food => (  
                    <div key={food.id} className="flex group items-start max-[1024px]:justify-between hover:bg-green-500 bg-[#f5f5f5] 
                    border border-dashed border-gray-300 p-4 px-7 max-[470px]:px-2 tracking-tighter ">  
                        <div className="flex gap-4 items-center">
                            <div className="rounded-full">
                            <img src={food.image} alt={food.title} className="w-17 h-17 mr-4" />  

                            </div>
                        <div className='flex flex-col gap-2'>  
                            <h2 className="text-xl max-[470px]:text-lg font-bold group-hover:text-white cursor-pointer">{food.title}</h2>  
                            <p className="text-gray-600 group-hover:text-green-200">{food.body}</p>  
                        </div>
                        </div>
                          
                        <p className="text-red-700 text-lg font-bold group-hover:text-white">{food.price}</p>    

                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default MenuItemRes;  