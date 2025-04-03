import React, { createContext, useContext, useState } from 'react';
import b1 from './assets/pages/menu1/m1.jpg'
import b2 from './assets/pages/menu1/m2.jpg'
import b3 from './assets/pages/menu1/m3.jpg'
import b4 from './assets/pages/menu1/m4.jpg'
import b5 from './assets/pages/menu1/m5.jpg'
import b6 from './assets/pages/menu1/m6.jpg'
import b7 from './assets/pages/menu1/m7.jpg'
import b8 from './assets/pages/menu1/m8.jpg'
import b9 from './assets/pages/menu1/m9.jpg'
import b10 from './assets/pages/menu1/m10.jpg'
import b11 from './assets/pages/menu1/m11.jpg'
import b12 from './assets/pages/menu1/m12.jpg'
import b13 from './assets/pages/menu1/m13.jpg'
import b14 from './assets/pages/menu1/m14.jpg'
import b15 from './assets/pages/menu1/m15.jpg'
import b16 from './assets/pages/menu1/m16.jpg'
import b17 from './assets/pages/menu1/m17.jpg'
import b18 from './assets/pages/menu1/m18.jpg'
import b19 from './assets/pages/menu1/m19.jpg'
import b20 from './assets/pages/menu1/m20.jpg'
import b21 from './assets/pages/menu1/m21.jpg'
import b22 from './assets/pages/menu1/m22.jpg'
import b23 from './assets/pages/menu1/m23.jpg'
import b24 from './assets/pages/menu1/m24.jpg'


export const Menu2Context = createContext();
export const Menu2Provider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            category: 'beef',
            type: '',
            title: 'Beefy Bourbon Bliss',
            body: 'Bourbon-infused beefy bliss savory, smoky, sublime perfection.',
            price: '$161',
            image: b1,
            href: ''
        },
        {
            id: 2,
            category: 'beef',
            type: '',
            title: 'Grilled American Fillet',
            body: 'Grilled American fillet, a succulent culinary Pizza.',
            price: '$56.82',
            image: b2,
            href: ''
        }, {
            id: 3,
            category: 'beef',
            type: '',
            title: 'Smoked Paprika Sirloin',
            body: 'Sirloin infused, smoked paprika perfection on grill.',
            price: '$39.62',
            image: b3,
            href: ''
        }, {
            id: 4,
            category: 'beef',
            type: '',
            title: 'Thai Basil Beef Stir-Fry',
            body: 'Stir-fried Thai basil beef aromatic, savory delight.',
            price: '$35.50',
            image: b4,
            href: ''
        }, {
            id: 5,
            category: 'beef',
            type: '',
            title: 'Guinness Glazed Ribs',
            body: 'Guinness-glazed ribs: rich, savory, Irish-inspired indulgence.',
            price: '$65.50',
            image: b5,
            href: ''
        }, {
            id: 6,
            category: 'beef',
            type: '',
            title: 'Grilled Gourmet Galore',
            body: 'Gourmet delight grilled to perfection and more.',
            price: '$75.50',
            image: b6,
            href: ''
        }, {
            id: 7,
            category: 'Grilled',
            type: '',
            title: 'Smoky BBQ Ribs',
            body: 'Bourbon-infused beefy bliss savory, smoky, sublime perfection.',
            price: '$69.50',
            image: b7,
            href: ''
        }, {
            id: 8,
            category: 'Grilled',
            type: '',
            title: 'Grilled American Fillet',
            body: 'Grilled American fillet, a succulent culinary Pizza.',
            price: '$56.50',
            image: b8,
            href: ''
        }, {
            id: 9,
            category: 'Grilled',
            type: '',
            title: 'Classic Grilled Shashlik',
            body: 'Sirloin infused, smoked paprika perfection on grill.',
            price: '$39.50',
            image: b9,
            href: ''
        }, {
            id: 10,
            category: 'Grilled',
            type: '',
            title: 'Spicy BBQ Chicken',
            body: 'Stir-fried Thai basil beef aromatic, savory delight.',
            price: '$39.50',
            image: b10,
            href: ''
        }, {
            id: 11,
            category: 'Grilled',
            type: '',
            title: 'Classic Grilled Shashlik',
            body: 'Guinness-glazed ribs: rich, savory, Irish-inspired indulgence.',
            price: '$65.50',
            image: b11,
            href: ''
        }, {
            id: 12,
            category: 'Grilled',
            type: '',
            title: 'Grilled Gourmet Galore',
            body: 'Gourmet delight grilled to perfection and more.',
            price: '$75.50',
            image: b12,
            href: ''
        },
        {
            id: 13,
            category: 'sizzling',
            type: '',
            title: 'Beef Sizzling',
            body: 'Bourbon-infused beefy bliss savory, smoky, sublime perfection.',
            price: '$210',
            image: b13,
            href: ''
        }, {
            id: 14,
            category: 'sizzling',
            type: '',
            title: 'Mutton Sizzling',
            body: 'Grilled American fillet, a succulent culinary Pizza.',
            price: '$110',
            image: b14,
            href: ''
        }, {
            id: 15,
            category: 'sizzling',
            type: '',
            title: 'Chicken Sizzling',
            body: 'Sirloin infused, smoked paprika perfection on grill.',
            price: '$220',
            image: b15,
            href: ''
        }, {
            id: 16,
            category: 'sizzling',
            type: '',
            title: 'Prawn Sizzling',
            body: 'Stir-fried Thai basil beef aromatic, savory delight.',
            price: '$180',
            image: b16,
            href: ''
        }, {
            id: 17,
            category: 'sizzling',
            type: '',
            title: 'Beef Sizzling',
            body: 'Guinness-glazed ribs: rich, savory, Irish-inspired indulgence.',
            price: '$150',
            image: b17,
            href: ''
        }, {
            id: 18,
            category: 'sizzling',
            type: '',
            title: 'Mutton Sizzling',
            body: 'Gourmet delight grilled to perfection and more.',
            price: '$170',
            image: b18,
            href: ''
        }, 
        {
            id: 19,
            category: 'steak',
            type: '',
            title: 'T-Bone Steak',
            body: 'Bourbon-infused beefy bliss savory, smoky, sublime perfection.',
            price: '$170',
            image: b19,
            href: ''
        }, 
        {
            id: 20,
            category: 'steak',
            type: '',
            title: 'Tomahawk Steak',
            body: 'Grilled American fillet, a succulent culinary Pizza.',
            price: '$170',
            image: b20,
            href: ''
        }, 
        {
            id: 21,
            category: 'steak',
            type: '',
            title: 'Filet Steak',
            body: 'Sirloin infused, smoked paprika perfection on grill.',
            price: '$170',
            image: b21,
            href: ''
        }, 
        {
            id: 22,
            category: 'steak',
            type: '',
            title: 'Flank Steak',
            body: 'Stir-fried Thai basil beef aromatic, savory delight.',
            price: '$170',
            image: b22,
            href: ''
        }, 
        {
            id: 23,
            category: 'steak',
            type: '',
            title: 'Ribeye Steak',
            body: 'Guinness-glazed ribs: rich, savory, Irish-inspired indulgence.',
            price: '$170',
            image: b23,
            href: ''
        }, 
        {
            id: 24,
            category: 'steak',
            type: '',
            title: 'Porterhouse Steak',
            body: 'Gourmet delight grilled to perfection and more.',
            price: '$170',
            image: b24,
            href: ''
        }, 
    ]);

    return (
        <Menu2Context.Provider value={{ foods, setFoods }}>
            {children}
        </Menu2Context.Provider>
    );
};

export const useData = () => useContext(Menu2Context);


