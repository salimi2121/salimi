import React, { useState } from 'react';
import { useData } from '../../../../Menu2Context';
import FadeInDown from '../../../FadeInDown';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

export default function BlogGrid(){
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
         max-[530px]:px-7 max-[440px]:px-4 w-full'>
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
                                    <div  key={food.id} className="flex flex-col justify-center items-center gap-3 rounded-2xl ">
                                                                   <div className="bg-gray-100 rounded-2xl w-full max-h-65">
                                                                       <img src={food.image} alt={food.title} className='w-full h-full text-center rounded-2xl' />
                                                                   </div>
                                                                   <div className="flex flex-col gap-4 pb-8" >
                                                                       <div className="flex items-center justify-start gap-3 w-full text-lg text-gray-600">
                                                                           <div className='flex gap-2 items-center justify-center capitalize'>
                                                                               <a href="" className=''> creativity </a>
                                                                               <div className=" text-[7px] text-red-700 pt-2 "> <FaCircle /> </div>
                                                                           
                                                                           </div>
                                                                           <div className="flex gap-2 items-center justify-center">
                                                                               <a href='' className='capitalize'> May 24, 2024</a>
                                                                           </div>
                                                                       </div>
                                                                       <div className='flex flex-col gap-3'>
                                                                           <a href='' className='uppercase font-bold text-xl tracking-tighter hover:text-red-700'>{food.title}</a>
                                                                           <p className=' text-gray-500 font-semibold pr-3 text-lg tracking-tighter leading-7' >{food.body}</p>
                                                                       </div>
                                                                       <div className="text-red-700 font-semibold tracking-tighter mt-2 text-lg capitalize">
                                                                           <a href={food.href || '#'} className='flex gap-2 items-start justify-start hover:text-green-600 group  transition-all duration-300 ease-in'>learn more <div className="group-hover:ml-1  transition-all duration-300 ease-in pt-1"><FaArrowRight /></div>  </a>
                                   
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