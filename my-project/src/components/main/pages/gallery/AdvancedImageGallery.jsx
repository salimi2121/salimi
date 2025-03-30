import { useState } from 'react';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AdvancedImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // تابع برای گروه‌بندی تصاویر بر اساس الگوی مورد نظر
  const groupImages = () => {
    const groups = [];
    let i = 0;
    
    // ردیف اول: 2 تصویر
    if (i < images.length) {
      groups.push({ 
        images: images.slice(i, i + 2), 
        cols: 'grid-cols-5', // استفاده از 5 ستون برای تقسیم بهتر
        customWidths: ['col-span-3', 'col-span-2'], // عرض تصویر اول: 3/5، تصویر دوم: 2/5
        rowHeight: 'h-[433px]', // ارتفاع ردیف اول
        mobileClass: 'max-[992px]:grid-cols-1'
      });
      i += 2;
    }
    
    // ردیف دوم و سوم: هر کدام 3 تصویر
    for (let j = 0; j < 2; j++) {
      if (i < images.length) {
        groups.push({ 
          images: images.slice(i, i + 3), 
          cols: 'grid-cols-3',
          customWidths: [],
          rowHeight: 'h-[303px]', // ارتفاع ردیف دوم و سوم
          mobileClass: 'max-[992px]:grid-cols-1'
        });
        i += 3;
      }
    }
    
    // ردیف چهارم: 2 تصویر
    if (i < images.length) {
      groups.push({ 
        images: images.slice(i, i + 2), 
        cols: 'grid-cols-5', // استفاده از 5 ستون برای تقسیم بهتر
        customWidths: ['col-span-2', 'col-span-3'], // عرض تصویر اول: 3/5، تصویر دوم: 2/5
        rowHeight: 'h-[433px]', // ارتفاع ردیف اول
        mobileClass: 'max-[992px]:grid-cols-1'
      });
    }
    
    return groups;
  };

  const imageGroups = groupImages();

  return (
    <div className="container mx-auto p-4 space-y-4">
      {imageGroups.map((group, groupIndex) => (
        <div key={groupIndex} className={`grid ${group.cols} gap-4 ${group.mobileClass}`}>
          {group.images.map((image, index) => {
            const actualIndex = images.findIndex(img => img.id === image.id);
            const customWidth = group.customWidths?.[index] || '';
            return (
              <div key={image.id}   className={`relative group overflow-hidden max-[992px]:w-full ${customWidth} max-[992px]:col-span-1 ${group.rowHeight}`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full max-[992px]:min-w-full object-cover transition-transform duration-500 "
                />
                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/70 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(actualIndex)}
                >
                  <FaSearchPlus className="text-white -mt-23 group-hover:mt-0 text-3xl opacity-0 group-hover:opacity-100 transition-all 
                  duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/80  flex items-center justify-center p-4">
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-white text-4xl hover:text-red-500 transition-colors duration-200"
          >
            <FaChevronLeft className="w-10 h-10 " />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] text-center">
            <button 
              onClick={closeModal}
              className="absolute -top-7 right-0 text-gray-300 cursor-pointer text-xl hover:text-white transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] z-30 object-contain mx-auto max-[400px]:px-2"
            />
            <p className="text-white text-xl mt-4">
              {images[currentIndex].alt} ({currentIndex + 1}/{images.length})
            </p>
          </div>

          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-50 text-white text-4xl hover:text-red-500 transition-colors duration-200"
          >
            <FaChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}