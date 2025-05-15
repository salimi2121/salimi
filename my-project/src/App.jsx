import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';  
import { DataProvider } from './DataContext'
import IndexRestauran from './components/main/restaurant/IndexRestaurant'
import IndexSushi from './components/main/sushi/IndexSushi';
import IndexBeef from './components/main/beef/IndexBeef';
import IndexBurger from './components/main/burger/IndexBurger';
import IndexPizza from './components/main/pizza/IndexPizza';
import IndexMenu2 from './components/main/menu/menu-list-two/IndexMenu2';
import IndexMenuGrid from './components/main/menu/menu-grid/IndexMenuGrid';
import IndexMenuDetails from './components/main/menu/menu-details/IndexMenuDetails';
import IndexAbout from './components/main/pages/abaout/IndexAbout';
import IndexHistory from './components/main/pages/history/IndexHistory';
import IndexChef from './components/main/pages/chef/IndexChef';
import IndexGallery from './components/main/pages/gallery/IndexGallery';
import IndexFaqs from './components/main/pages/faqs/IndexFaqs';
import Index404 from './components/main/pages/404/Index404';
import IndexShop from './components/main/shop/our-shop/IndexShop';
import IndexCart from './components/main/shop/cart/IndexCart';
import IndexCheckout from './components/main/shop/checkout/IndexCheckout'
import IndexBloggrid from './components/main/blog/blog-grid/IndexBloggrid';
import IndexBlogstandard from './components/main/blog/blog-standard/IndexBlogstandard';
import IndexBlogdetails from './components/main/blog/blog-details/IndexBlogdetails';
import IndexContact from './components/main/contact/IndexContact';
import IndexMenu1 from './components/main/menu/menu-list-one/indexMenu1';


export default function App() {
    const [count, setCount] = useState(0)
    

    return (
        <Router>  
        <DataProvider>  
            {/* <Header /> */}
            <Routes>  
                <Route path="/" element={<IndexRestauran />} />  
                <Route path="/IndexSushi" element={<IndexSushi />} />  
                <Route path="/IndexBeef" element={<IndexBeef />} />  
                <Route path="/IndexBurger" element={<IndexBurger />} />  
                <Route path="/IndexPizza" element={<IndexPizza />} />
                <Route path="/IndexMenu1" element={<IndexMenu1 />} />
                <Route path="/IndexMenu2" element={<IndexMenu2 />} />
                <Route path="/IndexMenuGrid" element={<IndexMenuGrid />} />
                <Route path="/IndexMenuDetails" element={<IndexMenuDetails />} />
                <Route path="/IndexAbout" element={<IndexAbout />} />
                <Route path="/IndexHistory" element={<IndexHistory />} />
                <Route path="/IndexChef" element={<IndexChef />} />
                <Route path="/IndexGallery" element={<IndexGallery />} />
                <Route path="/IndexFaqs" element={<IndexFaqs />} />
                <Route path="/Index404" element={<Index404 />} />
                <Route path="/IndexShop" element={<IndexShop />} />
                <Route path="/IndexCart" element={<IndexCart />} />
                <Route path="/IndexCheckout" element={<IndexCheckout />} />
                <Route path="/IndexBloggrid" element={<IndexBloggrid />} />
                <Route path="/IndexBlogstandard" element={<IndexBlogstandard />} />
                <Route path="/IndexBlogdetails" element={<IndexBlogdetails />} />
                <Route path="/IndexContact" element={<IndexContact />} />

                




            </Routes>  
        </DataProvider>  
    </Router>  

    )
}