import ModelViwer from '../3dmodel/ModelViewer'
import Slider from "react-slick"

const Prev = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className + " slick-prev"} onClick={onClick}><img src="assets/img/icons/gallery_left_arrow.png" alt=""/></button>
    )
}

const Next = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className + " slick-next" } onClick={onClick}><img src="assets/img/icons/gallery_right_arrow.png" alt=""/></button>
    )
}

const WeaponSlider = ({nav, refs}) =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        // variableWidth: true,
        draggable: false,
        centerMode: true,
        initialSlide: 5,
        centerPadding: '682px',
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:'weapons-slider mt-5',
        lazyLoad:'progressive',
        prevArrow: <Prev/>,
	    nextArrow: <Next/>,
        responsive:[
            {
                breakpoint: 1800,
                settings: {
                    items:5,
                    centerPadding: '570px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1370,
                settings: {
                    items: 5,
                    centerPadding: '500px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    items:3,
                    centerPadding: '344px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    items:3,
                    centerPadding: '338px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 990,
                settings: {
                    items:3,
                    centerPadding: '250px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 915,
                settings: {
                    items:3,
                    centerPadding: '250px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 820,
                settings: {
                    items:3,
                    centerPadding: '250px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    items:3,
                    centerPadding: '250px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
        ]
    }

    return (
        <Slider {...settings} asNavFor={nav} ref={refs}>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/guand1.glb" />
                </div>
                <h3 className="weapon-name title">
                    GUAND COMMON
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/guand2.glb" />
                </div>
                <h3 className="weapon-name title">
                    GUAND IMMORTAL
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/hlbrd3.glb" />
                </div>
                <h3 className="weapon-name title">
                    HLBRD RARE
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/hlbrd4.glb" />
                </div>
                <h3 className="weapon-name title">
                    HLBRD COMMON
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/sw1.glb" />
                </div>
                <h3 className="weapon-name title">
                    SW COMMON
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/dadao1.glb" />
                </div>
                <h3 className="weapon-name title">
                    DADAO IMMORTAL
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/sw2.glb" />
                </div>
                <h3 className="weapon-name title">
                    SW RARE
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/axe3.glb" />
                </div>
                <h3 className="weapon-name title">
                    AXE IMMORTAL
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/sw3.glb" />
                </div>
                <h3 className="weapon-name title">
                    SW IMMORTAL
                </h3>
            </div>
            <div className="weapon-slide mb-5">
                <div className="weapon-thumb">
                    <ModelViwer src="assets/img/weapons3d/axe1.glb"/>
                </div>
                <h3 className="weapon-name title">
                    AXE COMMON
                </h3>
            </div>
        </Slider>
    )
}

export default WeaponSlider