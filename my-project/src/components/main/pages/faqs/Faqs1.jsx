import { useState, useRef, useEffect } from 'react';
import FadeInDown from '../../../FadeInDown';


const AccordionItem = ({ question, answer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen); // استفاده از defaultOpen برای مقدار اولیه
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div className="border border-gray-200 rounded-xl tracking-tighter bg-white px-5 ">
            <button
                className="w-full flex justify-between items-center py-4 px-2 cursor-pointer text-left font-medium transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-md font-bold ">{question}</span>
                <span className={`text-lg font-extrabold border-2 rounded-full cursor-pointer w-4 h-4 flex justify-center items-center pb-1 ${
                    isOpen ? 'text-red-600 border-red-600' : 'text-current border-current'
                }`}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            <div
                ref={contentRef}
                className="px-2 overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: `${contentHeight}px`,
                    marginBottom: isOpen ? '1rem' : '0'
                }}
            >
                <p className="text-gray-600 pb-4">{answer}</p>
            </div>
        </div>
    );
};

const FAQAccordion = ({ items }) => {
    // ایندکس‌های آکاردیون‌هایی که باید باز باشند (3 و 5 که ایندکس 2 و 4 دارند)
    const defaultOpenIndices = [2, 5];

    // تقسیم آیتم‌ها به دو ستون
    const column1 = items.filter((_, index) => index % 2 === 0);
    const column2 = items.filter((_, index) => index % 2 !== 0);

    return (
        <div className="flex flex-col  lg:flex-row  gap-5">
            {/* ستون اول (آیتم‌های زوج ایندکس) */}
            <div className="lg:flex-1 space-y-5">
                {column1.map((item, colIndex) => {
                    // محاسبه ایندکس اصلی در آرایه
                    const originalIndex = colIndex * 2;
                    return (
                        <AccordionItem
                            key={`col1-${originalIndex}`}
                            question={item.question}
                            answer={item.answer}
                            defaultOpen={defaultOpenIndices.includes(originalIndex)}
                        />
                    );
                })}
            </div>
            
            {/* ستون دوم (آیتم‌های فرد ایندکس) */}
            <div className="lg:flex-1 space-y-5">
                {column2.map((item, colIndex) => {
                    // محاسبه ایندکس اصلی در آرایه
                    const originalIndex = colIndex * 2 + 1;
                    return (
                        <AccordionItem
                            key={`col2-${originalIndex}`}
                            question={item.question}
                            answer={item.answer}
                            defaultOpen={defaultOpenIndices.includes(originalIndex)}
                        />
                    );
                })}
            </div>
        </div>
    );
};
// نحوه استفاده از کامپوننت
export default function Faqs1() {
    const faqItems = [
        {
            question: "What is Sustainable Construction? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "What is Sustainable Construction?  ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "What Are The Different Types of Construction?",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "What Are The Different Types of Construction? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "What’re The Stages of Construction Project? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "What’re The Stages of Construction Project? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "How Long Does It Take to Build? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        },
        {
            question: "How Long Does It Take to Build? ",
            answer: "Commonly asked questions, concise answers. Streamlined for quick understanding. Commonly asked questions, concise answers. Streamlined for quick understanding."
        }
    ];

    return (
        <div className="bg-pink-50 ">
            <div className="flex flex-col gap-16 py-30 mx-auto  xl:px-30
               max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
               max-[530px]:px-7 max-[440px]:px-4">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop "> FAQS</p>
                        <h1 className="md:text-[42px] max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Frequently asked questions</h1>
                        <p className="lg:w-4/6 sm:w-3/4 text-lg font-semibold max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-700 text-center ">Commonly asked questions, concise answers. Streamlined for quick understanding. Simplifies user interactions, enhancing
                        </p>
                    </div>
                </FadeInDown>
                <FAQAccordion items={faqItems} />
            </div>

        </div>
    );
}