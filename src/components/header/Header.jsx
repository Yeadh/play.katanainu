import Navs from "../navbars/Navs";

const Header = () =>{
    return (
        <>
        {/* header-area */}
        <header>
            <div id="sticky-header" className="menu-area transparent-header">
            <div className="container custom-container">
                <div className="row">
                <div className="col-12">
                    <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                    <div className="menu-wrap">
                        <Navs/>
                    </div>
                    {/* Mobile Menu  */}
                    <div className="mobile-menu">
                    <nav className="menu-box">
                        <div className="close-btn"><i className="fas fa-times" /></div>
                        <div className="nav-logo">
                            <a href="/"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
                        </div>
                        <div className="menu-outer">
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                        </div>
                        <div className="social-links">
                        <ul className="clearfix">
                            <li><a href="# "><span className="fab fa-twitter" /></a></li>
                            <li><a href="# "><span className="fab fa-facebook-square" /></a></li>
                            <li><a href="# "><span className="fab fa-pinterest-p" /></a></li>
                            <li><a href="# "><span className="fab fa-instagram" /></a></li>
                            <li><a href="# "><span className="fab fa-youtube" /></a></li>
                        </ul>
                        </div>
                    </nav>
                    </div>
                    <div className="menu-backdrop" />
                    {/* End Mobile Menu */}
                </div>
                </div>
            </div>
            </div>
        </header>
        {/* header-area-end */}
        </>
    )
}

export default Header;