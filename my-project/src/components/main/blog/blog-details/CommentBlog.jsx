import React, { useState, useEffect } from 'react';
import c1 from '../../../../assets/pages/blog-details/c1.jpg'
import c2 from '../../../../assets/pages/blog-details/c2.jpg'
import c3 from '../../../../assets/pages/blog-details/c3.jpg'

export default function CommentBlog() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [commentsList, setCommentsList] = useState([]); // آرایه‌ای برای ذخیره کامنت‌ها  

    // استفاده از useEffect برای تنظیم کامنت‌های پیش‌فرض  
    useEffect(() => {
        const initialComments = [
            {
                name: "albert flores",
                text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas",
                date: "May 25, 2023",
                image: c1
            },
            {
                name: "Michel holder",
                text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas",
                date: "May 25, 2023",
                image: c2
            },
            {
                name: "Michel holder",
                text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur",
                date: "May 25, 2023",
                image: c3
            }
        ];
        setCommentsList(initialComments);
    }, []); // آرایه وابستگی خالی به این معنی است که فقط در بارگذاری اولیه اجرا می‌شود  

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // اضافه کردن کامنت جدید به آرایه کامنت‌ها  
        if (title.trim() && text.trim()) { // اطمینان از اینکه عنوان و متن خالی نیستند  
            const newComment = {  
                name: title, // از title استفاده می‌کنیم  
                text,  
                date: new Date().toLocaleString(), // تاریخ و زمان فعلی  
                image: c1 // تصویر پیش‌فرض  
            };  
            setCommentsList([...commentsList, newComment]);  
            setTitle(''); // reset title  
            setText(''); // reset text  
        }  
    };  

    return (
        <div className=" w-full ">

            <div className="mt-15">
                <h3 className="text-2xl mb-7 tracking-tighter font-bold">Popular Comments</h3>
                <ul className="list-none pl-0 mt-2">
                    {commentsList.map((cmt, index) => (
                        <li key={index} className="mb-4 p-8 border border-gray-300 rounded-lg flex max-[768px]:flex-col gap-7">
                            <img src={cmt.image} alt={cmt.name} className="inline-block w-21 h-21 rounded-full" />
                            <div className='w-full flex flex-col gap-4'>
                                <div className="flex justify-between uppercase w-full">
                                    <h4 className="font-semibold ">{cmt.name}</h4>
                                    <p className="text-sm text-red-700 font-semibold">{cmt.date}</p>
                                </div>
                                <p className='text-gray-800 leading-7'>{cmt.text}</p>
                                <a href="" className='text-red-700 font-semibold'>reply</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-[#f5f5f5] p-8 mt-12 rounded-2xl flex flex-col gap-4">
                <h2 className="text-2xl tracking-tighter font-bold">Leave a Comments</h2>
                <p className="text-gray-700">Your email address will not be published. Required fields are marked *</p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className="flex max-[768px]:flex-col gap-4">
                    <input
                        className="w-2/4 max-[768px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter Name"
                    />
                    <input
                        className="w-2/4 max-[768px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter Email"
                    />
                    </div>
                   
                    <textarea
                        className="border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                        rows="4"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Write Comments"
                    />
                    <button
                        type="submit"
                        className="mt-2 w-70 font-bold text-xl bg-red-700 uppercase text-white py-4 rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
                    >
                        post your comment
                    </button>
                </form>
            </div>




        </div>
    );
};  