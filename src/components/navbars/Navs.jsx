import { Outlet, Link, NavLink } from "react-router-dom"

const Navs  = () => {
    return (
        <>
            <nav className="menu-nav">
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                <ul className="navigation">
                    <li className="menu-item-has-children">
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>

                        <ul className="submenu">
                            <li>
                                <NavLink to="/the-game" className={({isActive}) => isActive ? 'active' : ''}>The Game</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className={({isActive}) => isActive ? 'active' : ''}>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/problem-solution" className={({isActive}) => isActive ? 'active' : ''}>Problem/Solution</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lorestory" className={({ isActive }) => isActive ? 'active' : ''}>Lore/Back Story</NavLink>
                            </li>
                            <li>
                                <NavLink to="/facsummary" className={({ isActive }) => isActive ? 'active' : ''}>Factions Summary</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Buy NFTs</span></a>
                        <ul className="submenu">
                                <li><a href="# ">To Mint Page <span>(Coming Soon)</span></a></li>
                            <li><a href="# ">To Marketplace</a></li>
                            <li><a href="# ">Characters</a></li>
                            <li><a href="# ">Weapons</a></li>
                            <li><a href="# ">Assets</a></li>
                            <li><a href="# ">Partner Program (Affiliate)<span>(Coming Soon)</span></a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Documents</span></a>
                        <ul className="submenu">
                            <li><a href="assets/resources/katanainuwhitepaper.pdf" target="_blank" rel="noreferrer">Whitepaper</a></li>
                            <li><a href="#roadmap">Roadmap</a></li>
                            <li><a href="assets/resources/Roadmap1.png" target="_blank" rel="noreferrer">Roadmap 2</a></li>
                            <li><a href="assets/resources/katanainutokenomics.pdf" target="_blank" rel="noreferrer">Tokenomics</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=N00zOuIwI3M">NFT Ecosystem</a></li>
                            <li><a href="/nftexplain.pdf" target="_blank" rel="noreferrer">2D NFT System</a></li>
                            <li><a href="assets/resources/Pitchdeck.pdf" target="_blank" rel="noreferrer">Pitchdeck</a></li>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScVXnhpPN1tmdKAczdvd5YDwCo_14oF3VdAp84BK7c9KEKD4Q/viewform" target="_blank" rel="noreferrer">Ambassador request</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Game</span></a>
                        <ul className="submenu">
                            <li><a href="# ">Play Katana Inu</a></li>
                            <li><a href="# ">How the game works?</a></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/faq" className={({isActive}) => isActive ? 'active' : ''}>FAQ</NavLink>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="# "><span>Social Media</span></a>
                        <ul className="submenu">
                            <li><a href="https://twitter.com/katanainu" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com/katanainu" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/Katanainu-104918325117822" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="https://www.discord.gg/katanainu" target="_blank" rel="noreferrer">Discord</a></li>
                            <li><a href="https://www.reddit.com/r/katanainu" target="_blank" rel="noreferrer">Reddit</a></li>
                            <li><a href="https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79" target="_blank" rel="noreferrer">Medium</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKIiYSpqNiBotOqkYZMUKqKnizt2_Xm1cLFjkyBH_CcpX3hg/viewform" target="_blank" rel="noreferrer">PLAY</a>
                    </li>
                    <li>
                        <NavLink to="/ranking" className={({ isActive }) => isActive ? 'active' : ''}>Ranking</NavLink>
                    </li>
                </ul>
                </div>
                <div className="header-action">
                <ul>
                        <li className="header-btn"><a href="https://kainu.io/" target="_blank" rel="noreferrer" className="btn">MARKETPLACE <i className="fa-solid fa-chevron-right"></i></a></li>
                </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navs
