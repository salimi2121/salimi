import React, { createContext, useContext, useState } from 'react';
import b1 from './assets/burger-page/menu-section/m1.png'
import b2 from './assets/burger-page/menu-section/m2.png'
import b3 from './assets/burger-page/menu-section/m3.png'
import b4 from './assets/burger-page/menu-section/m4.png'
import b5 from './assets/burger-page/menu-section/m5.png'
import b6 from './assets/burger-page/menu-section/m6.png'
import b7 from './assets/burger-page/menu-section/m7.png'
import b8 from './assets/burger-page/menu-section/m8.png'
import b9 from './assets/burger-page/menu-section/m9.png'
import b10 from './assets/burger-page/menu-section/m10.png'
import b11 from './assets/burger-page/menu-section/m11.png'
import b12 from './assets/burger-page/menu-section/m12.png'





const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            category: 'burger',
            type: '',
            title: 'Classic chicken',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$15.50',
            image: b1,
            href: ''
        },
        {
            id: 2,
            category: 'burger',
            type: '',
            title: 'cheese burger',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$20.50',
            image: b2,
            href: ''
        }, {
            id: 3,
            category: 'burger',
            type: '',
            title: 'grilled chicken',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$29.50',
            image: b3,
            href: ''
        }, {
            id: 4,
            category: 'grilled',
            type: '',
            title: 'Smoky BBQ Ribs',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b4,
            href: ''
        }, {
            id: 5,
            category: 'grilled',
            type: '',
            title: 'Spicy BBQ Chicken',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b5,
            href: ''
        }, {
            id: 6,
            category: 'grilled',
            type: '',
            title: 'Classic Grilled Shashlik',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b6,
            href: ''
        }, {
            id: 7,
            category: 'Sizzling',
            type: '',
            title: 'Beef Sizzling',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b7,
            href: ''
        }, {
            id: 8,
            category: 'Sizzling',
            type: '',
            title: 'Mutton Sizzling',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b8,
            href: ''
        }, {
            id: 9,
            category: 'Sizzling',
            type: '',
            title: 'Chicken Sizzling',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b9,
            href: ''
        }, {
            id: 10,
            category: 'Steak',
            type: '',
            title: 'T-Bone Steak',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b10,
            href: ''
        }, {
            id: 11,
            category: 'Steak',
            type: '',
            title: 'Tomahawk Steak',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b11,
            href: ''
        }, {
            id: 12,
            category: 'Steak',
            type: '',
            title: 'Filet Steak',
            body: 'Savor the exceptional with our NEW Steak! Discover succulence redefined. ',
            price: '$25.50',
            image: b12,
            href: ''
        },
    ]);

    return (
        <BurgerContext.Provider value={{ foods, setFoods }}>
            {children}
        </BurgerContext.Provider>
    );
};

export const useData = () => useContext(BurgerContext);


