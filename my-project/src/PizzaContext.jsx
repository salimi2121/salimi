import React, { createContext, useContext, useState } from 'react';
import b1 from './assets/pizza-page/menu-section/m1.png'
import b2 from './assets/pizza-page/menu-section/m2.png'
import b3 from './assets/pizza-page/menu-section/m3.png'
import b4 from './assets/pizza-page/menu-section/m4.jpg'
import b5 from './assets/pizza-page/menu-section/m5.jpg'
import b6 from './assets/pizza-page/menu-section/m6.jpg'
import b7 from './assets/pizza-page/menu-section/m7.jpg'
import b8 from './assets/pizza-page/menu-section/m8.jpg'
import b9 from './assets/pizza-page/menu-section/m9.jpg'
import b10 from './assets/pizza-page/menu-section/m10.jpg'
import b11 from './assets/pizza-page/menu-section/m11.jpg'
import b12 from './assets/pizza-page/menu-section/m12.jpg'
import b13 from './assets/pizza-page/choose-section/m13.png'
import b14 from './assets/pizza-page/choose-section/m14.png'
import b15 from './assets/pizza-page/choose-section/m15.png'
import b16 from './assets/pizza-page/choose-section/m16.png'
import b17 from './assets/pizza-page/choose-section/m17.png'
import b18 from './assets/pizza-page/choose-section/m18.png'


export const PizzaContext = createContext();
export const PizzaProvider = ({ children }) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            category: 'cheese',
            type: '',
            title: 'Cheese Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$121',
            image: b1,
            href: ''
        },
        {
            id: 2,
            category: 'cheese',
            type: '',
            title: 'Pesto Paradise',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$159',
            image: b2,
            href: ''
        }, {
            id: 3,
            category: 'cheese',
            type: '',
            title: 'Cali Fiesta Pie',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$220',
            image: b3,
            href: ''
        }, {
            id: 4,
            category: 'mushroom',
            type: '',
            title: 'Cheese Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b4,
            href: ''
        }, {
            id: 5,
            category: 'mushroom',
            type: '',
            title: 'Pesto Paradise',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b5,
            href: ''
        }, {
            id: 6,
            category: 'mushroom',
            type: '',
            title: 'Cali Fiesta Pie',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b6,
            href: ''
        }, {
            id: 7,
            category: 'Sausage',
            type: '',
            title: 'Cheese Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b7,
            href: ''
        }, {
            id: 8,
            category: 'Sausage',
            type: '',
            title: 'Pesto Paradise',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b8,
            href: ''
        }, {
            id: 9,
            category: 'Sausage',
            type: '',
            title: 'Cali Fiesta Pie',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b9,
            href: ''
        }, {
            id: 10,
            category: 'pepperoni',
            type: '',
            title: 'Cheese Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b10,
            href: ''
        }, {
            id: 11,
            category: 'pepperoni',
            type: '',
            title: 'Pesto Paradise',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b11,
            href: ''
        }, {
            id: 12,
            category: 'pepperoni',
            type: '',
            title: 'Cali Fiesta Pie',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$25.50',
            image: b12,
            href: ''
        },
        {
            id: 13,
            category: 'menu',
            type: '',
            title: 'Cheese Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$210',
            image: b13,
            href: ''
        }, {
            id: 14,
            category: 'menu',
            type: '',
            title: 'chicken pizza',
            body: 'Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust',
            price: '$110',
            image: b14,
            href: ''
        }, {
            id: 15,
            category: 'menu',
            type: '',
            title: 'Garden veggie',
            body: 'Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust',
            price: '$220',
            image: b15,
            href: ''
        }, {
            id: 16,
            category: 'menu',
            type: '',
            title: 'Bacon cheese',
            body: 'Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust',
            price: '$180',
            image: b16,
            href: ''
        }, {
            id: 17,
            category: 'menu',
            type: '',
            title: 'capriciosa pizza',
            body: 'Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust',
            price: '$150',
            image: b17,
            href: ''
        }, {
            id: 18,
            category: 'menu',
            type: '',
            title: 'pepperoni Pizza',
            body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
            price: '$170',
            image: b18,
            href: ''
        }, 
    ]);

    return (
        <PizzaContext.Provider value={{ foods, setFoods }}>
            {children}
        </PizzaContext.Provider>
    );
};

export const useData = () => useContext(PizzaContext);


