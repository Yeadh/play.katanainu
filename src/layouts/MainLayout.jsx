import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
// import Preloader from "../components/Preloader"
import ScrollTop from "../components/ScrollTop"

const MainLayout = ({ children })=>{
    return (
        <>
            {/* <Preloader/> */}
            <ScrollTop/>
            <Header/>
            <main className="main-area fix">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout;