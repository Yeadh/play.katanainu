import MainLayout from "../layouts/MainLayout"
import Team from "../components/Team"
import Advisor from "../components/Advisor"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const TeamPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <Team/>
                <Advisor/>
            </MainLayout>
            <Dots  color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default TeamPage