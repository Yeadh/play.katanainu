import MainLayout from "../layouts/MainLayout"
import Back from "../components/Back"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BackStory = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <MainLayout>
                <Back />
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading} />
        </>
    )
}

export default BackStory