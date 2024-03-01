import { useState } from "react"
import MyComponent from "./MyComponent"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* <h1>abcdefgh</h1> */}
        <MyComponent/>
        
        </>
    )
}

export default App
