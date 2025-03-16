import React, { createContext, useContext, useState } from 'react';
import m1 from './assets/resturan-page/menu-section/1.png'
import m2 from './assets/resturan-page/menu-section/2.png'
import m3 from './assets/resturan-page/menu-section/3.png'
import m4 from './assets/resturan-page/menu-section/4.png'
import m5 from './assets/resturan-page/menu-section/5.png'
import m6 from './assets/resturan-page/menu-section/6.png'
import m7 from './assets/resturan-page/menu-section/7.png'
import m8 from './assets/resturan-page/menu-section/8.png'


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [resfoods, setResFoods] = useState([
        {
            id: 1,
            category: 'res-menu',
            type: '',
            title: 'Truffle Mac and Cheese',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$25.50',
            image: m1,
            href: ''
        },
        {
            id: 2,
            category: 'res-menu',
            type: '',
            title: 'Grilled Ribeye Steak',
            body: 'Perfectly grilled ribeye steak with savory seasoning.',
            price: '$25.50',
            image: m2,
            href: ''
        },
        {
            id: 3,
            category: 'res-menu',
            type: '',
            title: 'Honey-Glazed Salmon',
            body: 'Sweet and savory honey-glazed salmon fillet.',
            price: '$25.50',
            image: m3,
            href: ''
        },
        {
            id: 4,
            category: 'res-menu',
            type: '',
            title: 'Thai Coconut Curry',
            body: 'Fragrant Thai coconut curry with vibrant vegetables.',
            price: '$25.50',
            image: m4,
            href: ''
        },
        {
            id: 5,
            category: 'res-menu',
            type: '',
            title: 'Gourmet Mushroom Risotto',
            body: 'Rich, creamy risotto with gourmet mushrooms',
            price: '$25.50',
            image: m5,
            href: ''
        },
        {
            id: 6,
            category: 'res-menu',
            type: '',
            title: 'Margarita Shrimp Tacos',
            body: 'Zesty shrimp tacos with fresh margarita flavor.',
            price: '$25.50',
            image: m6,
            href: ''
        },
        {
            id: 7,
            category: 'res-menu',
            type: '',
            title: 'BBQ Bacon Burger',
            body: 'Juicy burger topped with BBQ sauce and bacon.',
            price: '$35',
            image: m7,
            href: ''
        },
        {
            id: 8,
            category: 'res-menu',
            type: '',
            title: 'Spicy Tuna Roll',
            body: 'Spicy tuna roll with a bold, flavorful kick.',
            price: '$29',
            image: m8,
            href: ''
        },   
       
    ]);

    return (
        <DataContext.Provider value={{ resfoods, setResFoods }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);  