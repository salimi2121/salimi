import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"


export default function Packagesushi() {
    const bestpachage = [
        {
            id: 1,
            title: 'basic',
            price: '$12.00',
            type: 'Month',
            options: [
                { label: 'Spaghetti Marinara ' },
                { label: 'Rigatoni Amatriciana ' },
                { label: 'Seafood Linguine' },
                { label: 'Caprese Salad ' },
                { label: "Chef's Special Platter" },
                { label: 'Truffle Alfredo' },

            ],
        }, {
            id: 2,
            title: 'standard',
            price: '$12.00',
            type: 'Month',
            options: [
                { label: 'Spaghetti Marinara ' },
                { label: 'Rigatoni Amatriciana ' },
                { label: 'Seafood Linguine' },
                { label: 'Caprese Salad ' },
                { label: "Chef's Special Platter" },
                { label: 'Truffle Alfredo' },

            ],
        }, {
            id: 3,
            title: 'premium',
            price: '$12.00',
            type: 'Month',
            options: [
                { label: 'Spaghetti Marinara ' },
                { label: 'Rigatoni Amatriciana ' },
                { label: 'Seafood Linguine' },
                { label: 'Caprese Salad ' },
                { label: "Chef's Special Platter" },
                { label: 'Truffle Alfredo' },

            ],
        },
    ]

    return (
        <div>
            <FadeInDown>
                <div className="flex flex-col gap-4 justify-center items-center bg-white py-24 ">
                    <p className="text-red-700 font-bold uppercase ">  Our Pricing  </p>
                    <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Our best package</h1>
                    <p className="lg:w-2/4 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">Unbeatable today's offer! Avail exclusive discounts on premium items. Limited time only don't miss out on the best deal today!</p>
                </div>
            </FadeInDown>
            <FadeInUp>
                <div className="flex gap-6 justify-center items-center max-[1200px]:place-items-center max-[1200px]:grid max-[1200px]:grid-cols-2 max-[770px]:grid-cols-1 mx-auto p-30 max-[1000px]:px-10 max-[770px]:px-10 max-[530px]:px-5 pt-4 ">
                    {bestpachage.map((pack) => (
                        <div className="flex flex-col gap-1 w-1/3 max-[1200px]:w-full p-10 border-[5px] border-transparent hover:border-black shadow-sm  rounded-2xl">
                            <p className="font-semibold capitalize">{pack.title}</p>
                            <div className="flex items-end pb-7">
                                <span className="text-5xl font-bold">{pack.price}</span ><span className="text-xl font-semibold">/ {pack.type}</span>
                            </div>
                            <ul className="border-t-gray-300 border-t-1 pt-2 ">
                                {pack.options.map(info => (
                                    <li className="p-2 text-lg text-gray-900 font-semibold">{info.label}</li>
                                ))}
                            </ul>
                            <div className="bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-bg duration-200 cursor-pointer flex justify-center 
                                   items-center text-green-500 rounded-xl font-bold text-xl  xl:p-4 xl:px-10 p-3 px-8 max-[420px]:px-2 capitalize border border-green-400">
                                <a href={'#'}>
                                    get started
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeInUp>
        </div>
    )
}