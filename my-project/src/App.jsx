import { useState } from 'react'
import Sections from './components/main/Sections'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Sections />
        </div>
    )
}