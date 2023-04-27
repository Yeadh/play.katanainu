import ParallaxBg from "../components/parallax"
import MainLayout from "../layouts/MainLayout"
import BackLayout from "../layouts/BackLayout"
import Downloads from "../components/Downloads"
import Brands from "../components/Brands"


import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"


const Home = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <ParallaxBg />
                <BackLayout>
                    <Brands/>
                    <Downloads/>
                </BackLayout>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default Home