import { useState, useEffect } from 'react';

export default function TabsDetails2() {
    const tabs = [
        {
            title: 'food details',
            content: (
                <div className=" flex flex-col gap-8 ">


                    <p className="leading-7 text-md tracking-tight text-gray-700 ">
                        Indulge in a mouthwatering culinary delight with our Chicken Skewers paired with vibrant slices of sweet bell peppers.
                        Tender pieces of succulent chicken are marinated to perfection, resulting in a flavorful and juicy experience.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Ingredients:</h3>
                            <ul className='text-md flex flex-col gap-1 text-gray-700 square-list '>
                                <li>Fresh chicken breast or thigh meat, cubed</li>
                                <li>Assorted sweet bell peppers sliced into rings</li>
                                <li>Marinade (your choice of herbs, spices, and seasonings)</li>
                                <li>Olive oil</li>
                                <li>Salt and pepper</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Preparation:</h3>
                            <ul className='text-md text-gray-700 flex flex-col gap-1 square-list'>
                                <li>Enjoy the skewers with a side of fresh salad or rice</li>
                                <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                                <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'food video',
            content: (
                <div className=" flex flex-col gap-8 ">


                    <p className="leading-7 text-md tracking-tight text-gray-700 ">
                        Indulge in a mouthwatering culinary delight with our Chicken Skewers paired with vibrant slices of sweet bell peppers.
                        Tender pieces of succulent chicken are marinated to perfection, resulting in a flavorful and juicy experience.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Ingredients:</h3>
                            <ul className='text-md flex flex-col gap-1 text-gray-700 square-list '>
                                <li>Fresh chicken breast or thigh meat, cubed</li>
                                <li>Assorted sweet bell peppers sliced into rings</li>
                                <li>Marinade (your choice of herbs, spices, and seasonings)</li>
                                <li>Olive oil</li>
                                <li>Salt and pepper</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Preparation:</h3>
                            <ul className='text-md text-gray-700 flex flex-col gap-1 square-list'>
                                <li>Enjoy the skewers with a side of fresh salad or rice</li>
                                <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                                <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'reviews',
            content: (
                <div className=" flex flex-col gap-8 ">


                    <p className="leading-7 text-md tracking-tight text-gray-700 ">
                        Indulge in a mouthwatering culinary delight with our Chicken Skewers paired with vibrant slices of sweet bell peppers.
                        Tender pieces of succulent chicken are marinated to perfection, resulting in a flavorful and juicy experience.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Ingredients:</h3>
                            <ul className='text-md flex flex-col gap-1 text-gray-700 square-list '>
                                <li>Fresh chicken breast or thigh meat, cubed</li>
                                <li>Assorted sweet bell peppers sliced into rings</li>
                                <li>Marinade (your choice of herbs, spices, and seasonings)</li>
                                <li>Olive oil</li>
                                <li>Salt and pepper</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl tracking-tighter font-bold'>Preparation:</h3>
                            <ul className='text-md text-gray-700 flex flex-col gap-1 square-list'>
                                <li>Enjoy the skewers with a side of fresh salad or rice</li>
                                <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                                <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];
    const [activeTab, setActiveTab] = useState(0);
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        setShowContent(false);
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeTab]);

    

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-gray-200 text-xl ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 pt-3 pb-3 cursor-pointer capitalize font-semibold 
                        ${activeTab === index ? 'text-red-700 border-b-2 pb-3 transition-all duration-50 border-red-700'
                                : 'text-gray-700'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className={`tab-content transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'
                }`}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};
