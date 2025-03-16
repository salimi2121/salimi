import React, { createContext, useContext, useState } from 'react';

import kb1 from './assets/beef-page/gallery/kb1.jpg'
import kb2 from './assets/beef-page/gallery/kb2.jpg'
import kb3 from './assets/beef-page/gallery/kb3.jpg'
import kb4 from './assets/beef-page/gallery/kb4.jpg'
import kb5 from './assets/beef-page/gallery/kb5.jpg'
import m1 from './assets/beef-page/menu-section/m1.jpg'
import m2 from './assets/beef-page/menu-section/m2.jpg'
import m3 from './assets/beef-page/menu-section/m3.jpg'
import m4 from './assets/beef-page/menu-section/m4.jpg'
import m5 from './assets/beef-page/menu-section/m5.jpg'
import m6 from './assets/beef-page/menu-section/m6.jpg'
import m7 from './assets/beef-page/menu-section/m7.jpg'
import m8 from './assets/beef-page/menu-section/m8.jpg'
import s1 from './assets/beef-page/steak-section/s1.png'
import s2 from './assets/beef-page/steak-section/s2.png'
import s3 from './assets/beef-page/steak-section/s3.png'
import s4 from './assets/beef-page/steak-section/s4.png'


const BeefContext = createContext();

export const DataProvider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            category: 'kebab',
            section: 'gallery',
            type: '',
            title: 'shish kebob',
            body: '',
            price: '$42',
            image: kb1,
            href: ''
        },
        {
            id: 2,
            category: 'kebab',
            section: 'gallery',
            type: '',
            title: 'doner kebab',
            body: '',
            price: '$23',
            image: kb2,
            href: ''
        },
        {
            id: 3,
            category: 'kebab',
            section: 'gallery',
            type: '',
            title: 'chapli kebab',
            body: '',
            price: '$33',
            image: kb3,
            href: ''
        },
        {
            id: 4,
            category: 'kebab',
            section: 'gallery',
            type: '',
            title: 'shish kebab',
            body: '',
            price: '$33',
            image: kb4,
            href: ''
        },
        {
            id: 5,
            category: 'kebab',
            section: 'gallery',
            type: '',
            title: 'shish kebab',
            body: '',
            price: '$43',
            image: kb5,
            href: ''
        }, {
            id: 6,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Foodix Special Beef biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$25',
            image: m1,
            href: ''
        }, {
            id: 7,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Indian Chicken Tikka Biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$29',
            image: m2,
            href: ''
        }, {
            id: 8,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Hyderabadi Dum Biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$35',
            image: m3,
            href: ''
        }, {
            id: 9,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'pilaf bowl biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$32',
            image: m4,
            href: ''
        }, {
            id: 10,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: ' Vegetable Pulav biryani ',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$40',
            image: m5,
            href: ''
        }, {
            id: 11,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Iranian Beef biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$42',
            image: m6,
            href: ''
        }, {
            id: 12,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Mutton Dum biryani',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$42',
            image: m7,
            href: ''
        }, {
            id: 13,
            category: 'kebab',
            section: 'menu',
            type: '',
            title: 'Curried rice and beef',
            body: 'Indulgent mac and cheese with truffle essence.',
            price: '$39',
            image: m8,
            href: ''
        }, {
            id: 14,
            category: 'steak',
            section: 'steak',
            type: '',
            title: 'Flat Iron Steak',
            body: '',
            price: '$48',
            image: s1,
            href: ''
        }, {
            id: 15,
            category: 'steak',
            section: 'steak',
            type: '',
            title: 'T-Bone Steak',
            body: '',
            price: '$39',
            image: s2,
            href: ''
        }, 
        {
            id: 16,
            category: 'steak',
            section: 'steak',
            type: '',
            title: 'Tomahawk Steak',
            body: '',
            price: '$35',
            image: s3,
            href: ''
        }, 
        {
            id: 17,
            category: 'steak',
            section: 'steak',
            type: '',
            title: 'Ribeye Steak',
            body: '',
            price: '$39',
            image: s4,
            href: ''
        }, 



    ])
    return (
        <BeefContext.Provider value={{ foods, setFoods }}>
            {children}
        </BeefContext.Provider>
    );
}

export const useData = () => useContext(BeefContext);  