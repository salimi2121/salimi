import b1 from '../../../../assets/pages/menu-details/r1.png'
import b2 from '../../../../assets/pages/menu-details/r2.png'
import b3 from '../../../../assets/pages/menu-details/r3.png'
import FadeInUp from '../../../FadeInUp'


export default function MenuDetails3() {
     const blogfoods = [
            {
                id: 1,
                title: 'Cheese Pizza',
                body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
                href: '',
                img: b1,
                client: ' David',
            },
            {
                id: 2,
                title: 'chicken pizza',
                body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
                href: '',
                img: b2,
                client: ' David',
            }, {
                id: 3,
                title: 'Garden veggie',
                body: 'Melting mozzarella atop a crisp crust a timeless cheese pizza',
                href: '',
                img: b3,
                client: ' David',
            },
        ]    
    return (
        <div className="">
            <div className="flex flex-col gap-6 py-16 mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4">
                <h1 className="text-2xl font-bold tracking-tighter">Related items</h1>
               
                <FadeInUp>
                    <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[768px]:grid-cols-1 gap-5 justify-center items-center ">
                        {blogfoods.map((food) => (
                            <div className="flex flex-col justify-center items-center gap-2 ">
                                <img src={food.img} alt={food.title} className='w-full min-h-[244px] p-4' />
                                <div className="flex flex-col gap-3 justify-center items-center px-8 pb-8" >
                                   
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <a href='' className='uppercase font-bold text-xl tracking-tighter hover:text-green-600'>{food.title}</a>
                                        <p className=' text-gray-500 text-center text-lg w-60 tracking-tighter' >{food.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                        }

                    </div>
                </FadeInUp>
            
            </div>
        </div>
    )
}
