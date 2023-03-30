import MainLayout from "../layouts/MainLayout"
import ProblemSolution from "../components/ProblemSolution"


import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const ProblemSoluionPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])

    return (
        <>
            <MainLayout>
                <ProblemSolution/>
            </MainLayout>
            <Dots  color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default ProblemSoluionPage