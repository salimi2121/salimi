import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';  
import { DataProvider } from './DataContext'
import IndexRestauran from './components/main/restaurant/IndexRestaurant'
import Header from './components/header/Header';
import IndexSushi from './components/main/sushi/IndexSushi';
import IndexBeef from './components/main/beef/IndexBeef';
import IndexBurger from './components/main/burger/IndexBurger';


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

            </Routes>  
        </DataProvider>  
    </Router>  

    )
}