import React, { useState } from 'react';
import { useData } from '../../../../MenuGridContext';
import FadeInDown from '../../../FadeInDown';
import { FaStar } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Ourshop() {
    const { foods } = useData();
    const categories = [...new Set(foods.map(food => food.category))];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedType, setSelectedType] = useState('special');
    const [sortBy, setSortBy] = useState('newest'); // حالت پیش‌فرض: جدیدترین


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;
    const totalItems = foods.length;
    const itemsPerPage = Math.ceil(totalItems / totalPages);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    const startIndex = (currentPage - 1) * itemsPerPage;

    // تابع کمکی برای تبدیل قیمت به عدد
    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        
        // حذف کاراکترهای غیرعددی (مثل $ , و غیره)
        const numericString = String(priceStr).replace(/[^0-9.]/g, '');
        return parseFloat(numericString) || 0;
    };

    const getSortedFoods = () => {
        const foodsToSort = [...foods];
        switch (sortBy) {
            case 'newest':
                return foodsToSort.sort((a, b) => b.id - a.id);
            case 'price-low':
                return foodsToSort.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            case 'price-high':
                return foodsToSort.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            default:
                return foodsToSort;
        }
    };

    const sortedFoods = getSortedFoods();
    const currentFoods = sortedFoods.slice(startIndex, startIndex + itemsPerPage);


    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    };
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setCurrentPage(1); // بازگشت به صفحه اول پس از تغییر مرتب‌سازی
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const Pagination = ({ totalPages, currentPage, onPageChange, totalItems, startItem, endItem }) => {
        return (
            <div className="flex flex-col items-center gap-4 my-6 ">


                {/* کنترل‌های صفحه‌بندی */}
                <div className="flex justify-center items-center gap-4 max-[420px]:gap-1">
                    {/* دکمه صفحه قبل */}
                    <button
                        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-4 py-4 cursor-pointer rounded-md text-gray-700 border-gray-400 border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100'}`}
                    >
                        <FaArrowLeft />

                    </button>

                    {/* شماره صفحات */}
                    {[...Array(totalPages).keys()].map((i) => (
                        <button
                            key={i + 1}
                            onClick={() => onPageChange(i + 1)}
                            className={`px-5 py-3 cursor-pointer text-md font-semibold text-gray-700 border-gray-400 rounded-md ${currentPage === i + 1 ? 'bg-red-700 text-white' : 'border hover:bg-red-700 hover:text-white'}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* دکمه صفحه بعد */}
                    <button
                        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-4 py-4 rounded-md cursor-pointer text-gray-700 border-gray-400 border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100'}`}
                    >

                        <FaArrowRight />
                    </button>
                </div>
            </div>
        );
    };


    return (
        <div className='mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4 w-full bg-pink-50'>
            <div className="flex flex-col gap-10 pb-20">


                <div className="grid max-[1280px]:px-0 pt-30">
                    <div className="flex justify-between max-[520px]:flex-col max-[520px]:justify-center max-[520px]:items-center">
                    <div className="text-gray-600 text-xl font-semibold py-10">
                        Showing <span className="font-semibold">{startItem}</span> -
                        <span className="font-semibold">{endItem}</span> of
                        <span className="font-semibold"> {totalItems}</span> Results
                    </div>
                    {/* باکس انتخاب نوع مرتب‌سازی */}
                    <div className="flex items-center gap-2 max-[520px]:pb-10">
                            <select
                                id="sort"
                                value={sortBy}
                                onChange={handleSortChange}
                                className="border border-gray-300 rounded-md px-3 py-3 text-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="newest">Sort by Newness</option>
                                <option value="price-low">Price Low to High</option>
                                <option value="price-high">Price High to Low</option>
                            </select>
                        </div>
                    </div>
                    
                    <FadeInDown>
                        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
                            {currentFoods.length > 0 ? (
                                currentFoods.map(food => (
                                    <div key={food.id} className="menu-item relative group flex flex-col items-center max-[768px]:items-start  gap-2 rounded-3xl bg-white">
                                        <div className=" flex 
                                           transition-all duration-200 ease-in p-0 w-full rounded-t-3xl overflow-hidden">
                                            <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full flex-shrink-0' />
                                        </div>

                                        <div className='flex flex-col gap-1 w-full px-8 justify-start items-start'>
                                            <div className="flex justify-between w-full py-4 border-b border-gray-200">
                                                <p className='text-red-700 text-xl font-bold w-full'>{food.price}</p>
                                                <div className="flex gap-3 text-yellow-500 text-xl justify-center items-center">
                                                    <FaStar />
                                                    <p className='text-gray-700 font-semibold text-lg'>4.7(375)</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4 w-full">
                                                <h1 className='capitalize font-bold text-xl tracking-tighter mt-3'>
                                                    <a href="" className=''>{food.title}</a>
                                                </h1>
                                                <div className="flex flex-col gap-2 text-md text-gray-500 font-semibold">
                                                    <div className="flex gap-3 items-center">
                                                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 
                                                        6.5 22 12 22Z" stroke="#bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#Bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        <p className="">4 Piece Chicken</p>

                                                    </div>
                                                    <div className="flex gap-3 items-center">
                                                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 
                                                        6.5 22 12 22Z" stroke="#bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#Bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        <p className="">Spicy Sauce</p>

                                                    </div>
                                                </div>
                                                <div className="bg-white hover:border-red-700 transition-bg duration-200 cursor-pointer flex justify-center 
                                                  items-center text-gray-700 rounded-xl font-semibold text-xl w-full my-6 xl:p-4 xl:px-5 p-3 px-5 capitalize border border-gray-200">
                                                    <a href={food.href || '#'} className='flex gap-3 justify-center items-center w-full'>
                                                        <div className="text-2xl"><BsCartPlus /></div>
                                                        add to cart
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p>No items available in this category.</p>
                            )}
                        </div>
                    </FadeInDown>
                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    totalItems={totalItems}
                    startItem={startItem}
                    endItem={endItem}
                />
            </div>
        </div>
    )
}