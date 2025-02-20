import Navmenu from "./Navmenu";
import Navright from "./Navright";
import flogo from "../../assets/logo-white.png"
import Logo from "./Logo";



export default function Header() {
    const subMenus = [  
        {  
            title: 'home',  
            options: [  
                { label: 'home restaurant ', link: '#' },  
                { label: 'home beef ', link: '#' },  
                { label: 'home burger ', link: '#' }, 
                { label: 'home pizza ', link: '#' },  
                { label: 'home sushi ', link: '#' },   
            ],  
        },  
        {  
            title: 'menu ',  
            options: [  
                { label: 'menu list one ', link: '#' },  
                { label: 'menu list two ', link: '#' },  
                { label: 'menu grid ', link: '#' }, 
                { label: 'menu details ', link: '#' },  
 
            ],  
        }, 
        {  
            title: 'pages ',  
            options: [  
                { label: 'about us ', link: '#' },  
                { label: 'our history ', link: '#' },  
                { label: 'our chefs ', link: '#' }, 
                { label: 'our gallery ', link: '#' },  
                { label: 'faqs ', link: '#' }, 
                { label: 'error 404 ', link: '#' },  
            ],  
        }, 
        {  
            title: 'shop ',  
            options: [  
                { label: 'our shop ', link: '#' },  
                { label: 'product details ', link: '#' },  
                { label: 'cart ', link: '#' },  
                { label: 'check out ', link: '#' },  
            ],  
        },  
        {  
            title: 'blog ',  
            options: [  
                { label: 'blog grid', link: '#' },  
                { label: 'blog standard ', link: '#' },  
                { label: 'blog details ', link: '#' },  
            ],  
        },  
    ];
    return(
        // header
        <div className="container flex gap-22 max-[460px]:gap-8 xl:justify-center justify-between max-[650px]:px-8 items-center w-full">
            <Logo imageUrl={flogo} />
            <div className="flex gap-14 items-center ">
            <Navmenu subMenus={subMenus} />  

            <Navright subMenus={subMenus} />

            </div>
        </div>
    )
}