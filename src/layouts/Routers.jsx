import { BrowserRouter, Routes } from "react-router-dom"

const Routers = ({ children }) =>{
    return (
        <BrowserRouter>
            <Routes>
                { children }
            </Routes>
        </BrowserRouter>
    )
}

export default Routers