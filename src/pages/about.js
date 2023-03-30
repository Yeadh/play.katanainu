import MainLayout from "../layouts/MainLayout"
import About from "../components/About"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const AboutPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <About/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default AboutPage