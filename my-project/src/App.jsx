import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';  
import { DataProvider } from './DataContext'
import IndexRestauran from './components/main/restaurant/IndexRestaurant'
import IndexSushi from './components/main/sushi/IndexSushi';
import IndexBeef from './components/main/beef/IndexBeef';
import IndexBurger from './components/main/burger/IndexBurger';
import IndexPizza from './components/main/pizza/IndexPizza';
import IndexMenu2 from './components/main/menu/menu-list-two/IndexMenu2';
import IndexMenu1 from './components/main/menu/menu-list-one/IndexMenu1';
import IndexMenuGrid from './components/main/menu/menu-grid/IndexMenuGrid';
import IndexMenuDetails from './components/main/menu/menu-details/IndexMenuDetails';
import IndexAbout from './components/main/pages/abaout/IndexAbout';
import IndexHistory from './components/main/pages/history/IndexHistory';
import IndexChef from './components/main/pages/chef/IndexChef';
import IndexGallery from './components/main/pages/gallery/IndexGallery';
import IndexFaqs from './components/main/pages/faqs/IndexFaqs';
import Index404 from './components/main/pages/404/Index404';
import IndexShop from './components/main/shop/our-shop/IndexShop';


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
                




            </Routes>  
        </DataProvider>  
    </Router>  

    )
}