import MainLayout from "../layouts/MainLayout"
import { Dots } from "react-preloaders2"
import Faq from "../components/Faq"
import { useEffect, useState } from "react"

const FaqPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])

    return (
        <>
            <MainLayout>
                <Faq/>
            </MainLayout>
            <Dots  color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default FaqPage