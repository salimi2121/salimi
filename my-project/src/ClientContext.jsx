import React, { createContext, useContext, useState } from 'react';
import c1 from "./assets/testi-section/c1.jpg"

import c2 from "./assets/testi-section/c2.jpg"
import c3 from "./assets/testi-section/c3.jpg"



const ClientContext = createContext();
export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([
        {
            id: 1,
            category: 'sushi',
            type: 'special',
            title: 'Guy hawkins',
            body: 'purchased the original casper foods just over a week ago. so far it is a dream to sleep on. no more aches and pains in the morning and a great nights sleep.',
            image: c1,
            time: 'a week ago',
            href: ''
        },
        {
            id: 2,
            category: 'sushi',
            type: 'Guy hawkins',
            title: 'Tuna Nigiri',
            body: 'purchased the original casper foods just over a week ago. so far it is a dream to sleep on. no more aches and pains in the morning and a great nights sleep.',
            image: c2,
            time: 'a week ago',
            href: ''
        },
        {
            id: 3,
            category: 'sushi',
            type: 'special',
            title: 'California Roll',
            body: 'purchased the original casper foods just over a week ago. so far it is a dream to sleep on. no more aches and pains in the morning and a great nights sleep.',
            image: c3,
            time: 'a week ago',
            href: ''
        },
        {
            id: 4,
            category: 'pizza',
            type: 'special',
            title: 'Pepperoni Pizza',
            body: 'purchased the original casper foods just over a week ago. so far it is a dream to sleep on. no more aches and pains in the morning and a great nights sleep.',
            image: c1,
            time: 'a week ago',
            href: ''
        },
    ]);

    return (
        <ClientContext.Provider value={{ clients, setClients }}>
            {children}
        </ClientContext.Provider>
    );
};

export const useData = () => useContext(ClientContext);  
