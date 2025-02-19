import React from 'react';  

export default function Logo({ imageUrl }) {  
    return (  
        <div>  
            <a href="">  
                <img src={imageUrl} alt="Logo" className='flex shrink-0 min-w-40' />  
            </a>  
        </div>  
    );  
}  