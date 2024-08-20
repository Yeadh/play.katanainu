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

const WeaponsNav = ({ nav, refs }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        className:'row weapon-nav',
        lazyLoad:'progressive',
        prevArrow: <Prev/>,
	    nextArrow: <Next/>,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    }

    return (
        <Slider {...settings} asNavFor={nav} ref={refs}>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/axe1.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/axe2.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/dadao1.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/guand1.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/guand2.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/hlbrd3.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/hlbrd4.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/sw1.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/sw2.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/sw3.png" alt="img" />
                </div>
            </div>
            <div className="col">
                <div className="weapon-nav-item">
                    <img src="assets/img/weapons/sw4.png" alt="img" />
                </div>
            </div>
        </Slider>
    )
}

export default WeaponsNav