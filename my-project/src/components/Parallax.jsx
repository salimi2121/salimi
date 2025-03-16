import React, { useEffect } from 'react';  

const Parallax = ({ images }) => {  
    useEffect(() => {  
        const handleMouseMove = (e) => {  
            const { clientX, clientY } = e;  
            const x = (clientX / window.innerWidth) * 100;   
            const y = (clientY / window.innerHeight) * 100;  

            const imagesElements = document.querySelectorAll('.parallax-image');  
            imagesElements.forEach((img, index) => {  
                const depth = index * 10;   
                const movementX = (x - 50) * depth / 100;   
                const movementY = (y - 50) * depth / 100;   
                img.style.transform = `translate(-${movementX}px, -${movementY}px)`;   
            });  
        };  

        window.addEventListener('mousemove', handleMouseMove);  

        return () => {  
            window.removeEventListener('mousemove', handleMouseMove);  
        };  
    }, []);  

    return (  
        <div className="relative h-[100vh] overflow-hidden">  
            {images.map((src, index) => (  
                <img key={index} src={src} className="absolute transition-transform duration-100 ease-out" alt={`تصویر ${index + 1}`} />  
            ))}  
        </div>  
    );  
};  

export default Parallax;  