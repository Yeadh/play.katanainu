import MainLayout from "../layouts/MainLayout"
import Thegame from "../components/Thegame"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const TheGame = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <MainLayout>
                <Thegame />
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading} />
        </>
    )
}

export default TheGame