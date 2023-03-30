import MainLayout from "../layouts/MainLayout"
import Benefits from "../components/Benefits"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BeneFits = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <MainLayout>
                <Benefits />
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading} />
        </>
    )
}

export default BeneFits