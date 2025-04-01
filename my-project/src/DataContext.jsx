import React, { createContext, useContext, useState } from 'react';

import s1 from "./assets/menu-soshi/menu-1.jpg"
import s2 from "./assets/menu-soshi/menu-2.jpg"
import s3 from "./assets/menu-soshi/menu-3.jpg"
import st1 from "./assets/menu-steak/menu-1_10.jpg"
import st2 from "./assets/menu-steak/menu-1_11.jpg"
import st3 from "./assets/menu-steak/menu-1_12.jpg"
import pi1 from "./assets/menu-pizza/menu-1_4.jpg"
import pi2 from "./assets/menu-pizza/menu-1_5.jpg"
import pi3 from "./assets/menu-pizza/menu-1_6.jpg"
import ch1 from "./assets/menu-chicken/menu-1_13.jpg"
import ch2 from "./assets/menu-chicken/menu-1_14.jpg"
import ch3 from "./assets/menu-chicken/menu-1_15.jpg"
import c1 from "./assets/menu-cake/menu-1_16.jpg"
import c2 from "./assets/menu-cake/menu-1_17.jpg"
import c3 from "./assets/menu-cake/menu-1_18.jpg"
import b1 from "./assets/menu-burger/menu-1_7.jpg"
import b2 from "./assets/menu-burger/menu-1_8.jpg"
import b3 from "./assets/menu-burger/menu-1_9.jpg"
import blog1 from "./assets/griddl/blog-1.jpg"
import blog2 from "./assets/menu-steak/blog-2.jpg"
import blog3 from "./assets/menu-chicken/blog-3.jpg"
import cart1 from "./assets/cartbtn/cart-1.jpg"
import cart2 from "./assets/cartbtn/cart-2.jpg"
import cart3 from "./assets/cartbtn/cart-3.jpg"
import cart4 from "./assets/cartbtn/cart-4.jpg"



const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            category: 'sushi',
            type: 'special',
            title: 'Rainbow Roll',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: s1,
            href: ''
        },
        {
            id: 2,
            category: 'sushi',
            type: 'special',
            title: 'Tuna Nigiri',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: s2,
            href: ''
        },
        {
            id: 3,
            category: 'sushi',
            type: 'special',
            title: 'California Roll',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: s3,
            href: ''
        },
        {
            id: 4,
            category: 'pizza',
            type: 'special',
            title: 'Pepperoni Pizza',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: pi1,
            href: ''
        },
        {
            id: 5,
            category: 'pizza',
            type: 'special',
            title: 'Mushroom Pizza',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: pi2,
            href: ''
        }, {
            id: 6,
            category: 'pizza',
            type: 'special',
            title: 'BBQ Chicken Pizza',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',            price: '$25.50',
            image: pi3,
            href: ''
        },
        {
            id: 7,
            category: 'burger',
            type: 'special',
            title: 'BBQ Burger',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: b1,
            href: ''
        },
        {
            id: 8,
            category: 'burger',
            type: 'special',
            title: 'Lamb Burger',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: b2,
            href: ''
        }, {
            id: 9,
            category: 'burger',
            type: 'special',
            title: 'Chicken Burger',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: b3,
            href: ''
        },
        {
            id: 10,
            category: 'steak',
            type: 'special',
            title: 'T-Bone Steak',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: st1,
            href: ''
        },
        {
            id: 11,
            category: 'steak',
            type: 'special',
            title: 'Ribeye Steak',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: st2,
            href: ''
        }, {
            id: 12,
            category: 'steak',
            type: 'special',
            title: 'Brisket Steak',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: st3,
            href: ''
        },
        {
            id: 13,
            category: 'chicken',
            type: 'special',
            title: 'Chicken Stir-Fry',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: ch1,
            href: ''
        }, {
            id: 14,
            category: 'chicken',
            type: 'special',
            title: 'Grilled Chicken Breast',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: ch2,
            href: ''
        },

        {
            id: 15,
            category: 'chicken',
            type: 'special',
            title: 'Spicy Chicken Fingers',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: ch3,
            href: ''
        },

        {
            id: 16,
            category: 'cake',
            type: 'special',
            title: 'Whoopie Pie Cake',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: c1,
            href: ''
        },

        {
            id: 17,
            category: 'cake',
            type: 'special',
            title: 'Funfetti Cake',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: c2,
            href: ''
        },

        {
            id: 18,
            category: 'cake',
            type: 'special',
            title: 'Strawberry Shortcake',
            body: 'A sushi roll with colorful fish slices, usually tuna, salmon, and avocad',
            price: '$25.50',
            image: c3,
            href: ''
        },

        {
            id: 19,
            category: 'sushi',
            title: 'Rainbow Sushi',
            body: 'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
            price: '$59.00',
            image: 's1',
            href: ''
        },
        {
            id: 20,
            category: 'sushi',
            title: 'Octopus Sushi',
            body: 'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
            price: '$59.00',
            image: '',
            href: ''
        },
        {
            id: 21,
            category: 'sushi',
            title: 'Spicy Tuna Shushi ',
            body: 'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
            price: '$59.00',
            image: '',
            href: ''
        },
        {
            id: 22,
            category: 'sushi',
            title: 'Salmon Nigiri',
            body: 'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
            price: '$59.00',
            image: '',
            href: ''
        },
        {
            id: 23,
            category: 'griddl',
            title: 'Gourmet Griddl Masterpiece',
            body: 'Indulge your taste buds in a culinary adventure with our Testy Food .',
            price: '$59.00',
            image: blog1,
            href: '',
            time:'May 24, 2024'
        },{
            id: 24,
            category: 'steak',
            title: 'Deluxe Flavor Fusion Stack',
            body: 'Experience the artistry of our chefs as they elevate classic recipes .',
            price: '$59.00',
            image: blog2,
            href: '',
            time:'May 24, 2024'

        },{
            id: 25,
            category: 'chicken',
            title: 'Regal Royale Delight',
            body: 'Each carefully selected ingredient to contributes the harmonious food .',
            price: '$59.00',
            image: blog3,
            href: '',
            time:'May 24, 2024'

        },{
            id: 26,
            category: 'sushi-cart',
            title: 'Urban Bourbon Bliss Ribeye',
            body: '',
            price: '$940',
            image: cart1,
            href: '',
            time:'May 24, 2024'

        },{
            id: 27,
            category: 'sushi-cart',
            title: 'Artisanal Truffle Tango Sirloin ',
            body: '',
            price: '$940',
            image: cart2,
            href: '',
            time:'May 24, 2024'

        },{
            id: 28,
            category: 'sushi-cart',
            title: 'Smoked Paprika Perfection ',
            body: '',
            price: '$940',
            image: cart3,
            href: '',
            time:'May 24, 2024'

        },{
            id: 29,
            category: 'sushi-cart',
            title: 'Tandoori Temptation Tender ',
            body: '',
            price: '$940',
            image: cart4,
            href: '',
            time:'May 24, 2024'

        },

    ]);

    return (
        <DataContext.Provider value={{ foods, setFoods }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);  