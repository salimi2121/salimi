import { useState } from 'react';  

export default function ExclusiveCheckboxes() {  
  const [checkboxes, setCheckboxes] = useState([  
    {  
      id: 1,  
      label: "Cash On Delivery",  
      description: "Pay with cash remains a simple and reliable choice, transcending the complexities of modern finance.",  
      checked: false,  
      showDescription: false  
    },  
    {  
      id: 2,  
      label: "Direct Bank Transfer",  
      description: "Please proceed with your payment directly into our bank account. Kindly use your Order ID as the payment reference. Your order will be processed once the payment reflects in our account.",  
      checked: false,  
      showDescription: false  
    },  
    {  
      id: 3,  
      label: "Paypal",  
      description: "You can make your payment via PayPal. If you don't have a PayPal account, you can use your credit card to complete the transaction.",  
      checked: false,  
      showDescription: false  
    }  
  ]);  

  // تابع برای تغییر وضعیت چک‌باکس و نمایش توضیحات  
  const handleSelection = (selectedId) => {  
    setCheckboxes(  
      checkboxes.map(checkbox => ({  
        ...checkbox,  
        checked: checkbox.id === selectedId,  
        showDescription: checkbox.id === selectedId ? !checkbox.showDescription : false  
      }))  
    );  
  };  

  return (  
    <div className="">  
      <div className="space-y-3">  
        {checkboxes.map((checkbox) => (  
          <div key={checkbox.id} className="flex flex-col">  
            <div className="flex items-center">  
              {/* چک‌باکس سفارشی */}  
              <label className="relative flex items-start justify-start cursor-pointer">  
                <input  
                  type="checkbox"  
                  checked={checkbox.checked}  
                  onChange={() => handleSelection(checkbox.id)}  
                  className="sr-only"  
                />  
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200  
                  ${checkbox.checked   
                    ? 'border-blue-300 border-4 bg-blue-500'   
                    : 'border-gray-300 bg-white'}`}  
                >  
                  {checkbox.checked && (  
                    <div className="flex justify-center items-center rounded-full ">  
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>  
                    </div>  
                  )}  
                </div>  
              </label>  
              
              {/* عنوان قابل کلیک */}  
              <span   
                onClick={() => handleSelection(checkbox.id)}  
                className="ml-2 text-gray-700 font-bold cursor-pointer hover:text-blue-600 hover:underline"  
              >  
                {checkbox.label}  
              </span>  
            </div>  

            {/* توضیحات */}  
            {checkbox.showDescription && checkbox.checked && (  
              <div className="ml-2 w-65 max-[1280px]:w-200 max-[1200px]:w-full p-3 text-gray-700 leading-8 text-md animate-fade-in">  
                {checkbox.description}  
              </div>  
            )}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  