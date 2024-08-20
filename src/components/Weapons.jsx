// import { useState } from "react"
import WeaponSlider from "./sliders/WeaponSlider"
// import WeaponsNav from "./sliders/WeaponsNav"

const Weapons = () =>{
    // const [ nav1, setNav1] = useState(null)
    // const [ nav2, setNav2] = useState(null)

    return (
        <div className="weapons-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center">
                            <h5 className="sub-title element paroller">DIFFERENT RARITY WEAPONS</h5>
                            <h2 className="title paroller">IN-GAME ITEMS</h2>
                            {/* <h5 className="sub-title element paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">Different rarities weapons</h5>
                            <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">IN-GAME ITEMS</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom-container p-0">
                {/* <div className="weapons-slider">
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                    <img src="img/sourds/sourd.png" alt="img" />
                </div> */}
                <WeaponSlider/>
            </div>
            <div className="weapon-bottom-button">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-btn-wrap mt-30 mb-50">
                                <div className="wow fadeInLeft" data-wow-delay=".8s" data-animation="fadeInLeft"><a href="https://mint.katanainu.com/" target="_blank" rel="noreferrer" className="btn">MINT NFTS NOW</a></div>
                                <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="#/" target="_blank" rel="noreferrer" className="btn">Go to Marketplace</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weapons