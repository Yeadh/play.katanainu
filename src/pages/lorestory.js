import MainLayout from "../layouts/MainLayout"
import Lore from "../components/Lore"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const LoreStory = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <MainLayout>
                <Lore />
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading} />
        </>
    )
}

export default LoreStory