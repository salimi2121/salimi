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

            </Routes>  
        </DataProvider>  
    </Router>  

    )
}