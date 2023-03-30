import MainLayout from "../layouts/MainLayout"
import Ranking from "../components/Ranking"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const Rankings = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <MainLayout>
                <Ranking />
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading} />
        </>
    )
}

export default Rankings