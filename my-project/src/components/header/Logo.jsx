import React from 'react';  

export default function Logo({ imageUrl }) {  
    return (  
        <div>  
            <a href="">  
                <img src={imageUrl} alt="Logo" />  
            </a>  
        </div>  
    );  
}  