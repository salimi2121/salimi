import React from 'react';
import FadeInDown from '../../../FadeInDown'
import f1 from '../../../../assets/pages/menu2/select/m2.jpg'
import f2 from '../../../../assets/pages/menu2/select/m3.jpg'
import f3 from '../../../../assets/pages/menu2/select/m4.jpg'
import f4 from '../../../../assets/pages/menu2/select/m1.jpg'
import f5 from '../../../../assets/pages/menu2/select/m5.jpg'

import FadeInRight from '../../../FadeInRight';


export default function SelectionMenu1() {
    const foods = [
        {
            id: 1,
            title: 'Smoked Paprika Sirloin',
            body: 'Sirloin infused, smoked paprika perfection on grill.',
            image: f1,
            price: '$39.92',
            href: ''
        },
        {
            id: 2,
            title: 'Red Wine Reduction Ribe',
            body: 'Ribeye, luxuriously glazed, red wine reduction perfection.',
            image: f2,
            price: '$32.82',
            href: ''
        }, {
            id: 3,
            title: 'Raspberry Chipotle Bone',
            body: 'T-Bone tango with raspberry chipotle, bold harmony.',
            image: f3,
            price: '$56.62',
            href: ''
        },{
            id: 4,
            title: 'Raspberry Chipotle Bone',
            body: 'T-Bone tango with raspberry chipotle, bold harmony.',
            image: f5,
            price: '$56.62',
            href: ''
        },
    ]
    return (
        <div className="">
            <div className="flex flex-col gap-15 justify-center items-center py-25 px-30 max-[1280px]:px-20
             max-[1200px]:px-18 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <h1 className="tracking-tighter md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Delightful Culinary Selection</h1>
                        <p className="tracking-tighter lg:w-4/6 sm:w-3/4 text-lg font-semibold max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-600 text-center mt-2">
                        Indulge in an array of meticulously crafted sushi rolls, artfully blending
                        fresh ingredients for a delightful taste experience.
                        </p>
                    </div>
                </FadeInDown>
                <div className="flex gap-6 max-[1200px]:flex-col w-full">
                    
                   
                    <div className="w-2/4 max-[1200px]:w-full grid grid-cols-1 gap-6">
                        {
                            foods.map((food) => (
                                <div className="flex max-[768px]:flex-col gap-4 max-[768px]:gap-6 justify-center items-center max-[1200px]:justify-start max-[768px]:items-start max-[768px]:p-4 border border-pink-100 ">
                                    <div className=" flex 
                                           transition-all duration-200 ease-in p-0 w-50 h-[170px] overflow-hidden">
                                        <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full flex-shrink-0' />

                                    </div>

                                    <div className='flex flex-col gap-1 justify-start items-start'>
                                        <h1 className='capitalize font-bold text-xl tracking-tighter '><a href="" className=''>{food.title}</a> </h1>
                                        <p className='text-gray-600 text-lg w-80 max-[768px]:w-5/6 max-[460px]:w-full py-2' >{food.body}</p>
                                        <div className="flex w-full">
                                            <p className='text-red-700 text-xl font-bold w-full'>{food.price}</p>

                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-2/4 max-[1200px]:w-full">
                    
                    
                    <FadeInRight>
                    <img src={f4} alt="" className='w-full h-full' />
                    </FadeInRight>
                    </div>
                </div>


            </div>
        </div>
    )
}