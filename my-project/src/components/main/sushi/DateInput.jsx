import React, { useState } from 'react';  
import DatePicker from 'react-datepicker';  
import 'react-datepicker/dist/react-datepicker.css';  

function DateInput({ inputStyle}) {  
    const [selectedDate, setSelectedDate] = useState(null);  

    return (  
        <div className='w-full'>  
            <DatePicker  
                selected={selectedDate}  
                onChange={(date) => setSelectedDate(date)}  
                placeholderText="Date" // پلیس هولدر  
                className=" p-5 font-semibold w-full hover:outline-0 focus-visible:outline-0 "  
                dateFormat="MM/dd/yyyy"  // فرمت تاریخ  
                isClearable // اجازه می‌دهد تاریخ انتخاب شده را پاک کنید  
            />  
        </div>  
    );  
}  

export default DateInput;  