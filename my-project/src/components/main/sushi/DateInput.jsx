import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";


function DateInput({ inputStyle }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const renderCustomHeader = ({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
    }) => (
        <div className="flex items-center justify-between text-center px-1 w-[270px] z-50 ">
           
            <div className="flex justify-between items-center rounded-md px-3 mb-3 border border-gray-300 w-full bg-gray-200">
                <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="cursor-pointer hover:bg-gray-700 bg-gray-800 text-gray-50 text-lg m-3 rounded-md h-[17px] w-[16px] flex  "
                >
                    <MdArrowLeft />
                </button>
                <span className="font-semibold text-lg text-gray-800">
                    {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="cursor-pointer hover:bg-gray-700  bg-gray-800 text-gray-50 text-lg my-3 rounded-md h-[17px] w-[16px] flex"
                >
                  <MdArrowRight />
                </button>
            </div>
        </div>
    );
    return (
        <div className='w-full'>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Date"
                className=" p-5 font-semibold w-full hover:outline-0 focus-visible:outline-0 "
                dateFormat="MM/dd/yyyy"  // فرمت تاریخ  
                isClearable // اجازه می‌دهد تاریخ انتخاب شده را پاک کنید  
                renderCustomHeader={renderCustomHeader}
                calendarClassName="border-0 shadow-lg z-30"
                dayClassName={() => "bg-gray-50 rounded border border-gray-200 p-1 px-2"}
                weekDayClassName={() => "font-semibold text-sm "}
                formatWeekDay={nameOfDay => nameOfDay.substring(0, 2)} // نمایش دو حرف اول روزها
            />
        </div>
    );
}

export default DateInput;  