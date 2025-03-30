import g1 from '../../../../assets/pages/gallery/g1.jpg'
import g2 from '../../../../assets/pages/gallery/g2.jpg'
import g3 from '../../../../assets/pages/gallery/g3.jpg'
import g4 from '../../../../assets/pages/gallery/g4.jpg'
import g5 from '../../../../assets/pages/gallery/g5.jpg'
import g6 from '../../../../assets/pages/gallery/g6.jpg'
import g7 from '../../../../assets/pages/gallery/g7.jpg'
import g8 from '../../../../assets/pages/gallery/g8.jpg'
import g9 from '../../../../assets/pages/gallery/g9.jpg'
import g10 from '../../../../assets/pages/gallery/g10.jpg'
import { FaSearchPlus } from "react-icons/fa";
import AdvancedImageGallery from './AdvancedImageGallery'

export default function Gallery1() {
const myImages = [
    { id: 1, src: g1, alt: "توضیح تصویر 1", className: 'col-span-3 row-span-2 h-96'  },
    { id: 2, src: g2, alt: "توضیح تصویر 2", className: 'col-span-3 row-span-2 h-96' },
    { id: 3, src: g3, alt: "توضیح تصویر 2", className: 'col-span-1 row-span-1 h-48' },
    { id: 4, src: g4, alt: "توضیح تصویر 2", className: 'col-span-2 row-span-2 h-96'  },
    { id: 5, src: g5, alt: "توضیح تصویر 2" , className: 'col-span-3 row-span-2 h-96' },
    { id: 6, src: g6, alt: "توضیح تصویر 2" , className: 'col-span-3 row-span-2 h-96' },
    { id: 7, src: g7, alt: "توضیح تصویر 2" , className: 'col-span-3 row-span-2 h-96' },
    { id: 8, src: g8, alt: "توضیح تصویر 2" , className: 'col-span-3 row-span-2 h-96' },
    { id: 9, src: g9, alt: "توضیح تصویر 2" , className: 'col-span-3 row-span-2 h-96' },
    { id: 10, src: g10, alt: "توضیح تصویر 2", className: 'col-span-3 row-span-2 h-96'},
  ];
  
    return (
        <div className="">
            <div className="flex pt-30 mx-auto  xl:px-30
               max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
               max-[530px]:px-7 max-[440px]:px-4">
                <AdvancedImageGallery images={myImages} />
                
                {/* <div className="flex gap-6">
                    <div className="relative flex w-3/5">
                        <img src={g1} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start group  
                                                    justify-center opacity-0 hover:opacity-60 transition-all duration-300 ease-in">
                            <FaSearchPlus className="text-white w-7 h-7 text-4xl cursor-pointer transition-all 
                                                        duration-300 ease-in mt-33 group-hover:mt-53" />
                        </div>
                    </div>
                    <div className="relative flex w-2/5">
                        <img src={g2} alt="" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start group  
                                                    justify-center opacity-0 hover:opacity-60 transition-all duration-300 ease-in">
                            <FaSearchPlus className="text-white w-7 h-7 text-4xl cursor-pointer transition-all 
                                                        duration-300 ease-in mt-33 group-hover:mt-53" />
                        </div>
                    </div>
                    
                </div> */}
            </div>
        </div>
    )
}