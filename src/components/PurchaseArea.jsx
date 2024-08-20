import React, { useState } from 'react'



function PurchaseArea() {
    const [copySucessUniswap, setcopySucessUniswap] = useState()
    const [copySuccessPancake, setcopySuccessPancake] = useState()
    const copyToClipboard = (token, text) => {
        if (navigator.clipboard !== 'undefined') {
            navigator.clipboard.writeText(token)
                .then(() => {
                    if (text === 'uniswap') {
                        setcopySucessUniswap('Copied!');
                    } else {
                        setcopySuccessPancake('Copied!');
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
    return (
        <section className="purchase-area">
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="exchange-cal">
                        <iframe id="simpleswap-frame" name="SimpleSwap Widget" width="528px" height="392px" src="https://simpleswap.io/widget/d08a1cfe-4ae7-428a-80ad-ff1a1faaa710" frameborder="0"></iframe>
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title text-center mb-50">
                            {/* <h2 className="title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">YOU CAN <span>PURCHASE</span> now</h2> */}
                            <h5 className="sub-title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">PANCAKE SWAP AND UNISWAP</h5>
                        </div>
                        <div className="purchase-title-paragraph text-center">
                            <p>Pancake swap and Uniswap are the easiest outlets for purchasing the Katana Inu Token.Please make sure you Copy and Paste the correct Contract below when adding the token to your ETH or BSC Wallet and when purchasing $KATA on Uniswap or Pancake Swap. To swap any token for $KATA, just copy-paste the correct Contract into Pancakeswap or Uniswap, and swap for $KATA. Do not send funds to this address directly, or you will lose your tokens.</p>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-6">

                        <div className="purchase-item active">
                            <div className="purchase-btn">
                                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet" target="_blank" rel="noreferrer" className="btn">Uniswap</a>
                            </div>
                            <h4 className="title">0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15 <i onClick={() => copyToClipboard("0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15", "uniswap")} className="fa-solid fa-copy"></i> <span>{copySucessUniswap}</span> </h4>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="purchase-item active">
                            <div className="purchase-btn">
                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205" target="_blank" rel='noreferrer' className="btn">Pancake Swap</a>
                            </div>
                            <h4 className="title">0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205 <i onClick={() => copyToClipboard("0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205", "pancake")} className="fa-solid fa-copy"></i> <span>{copySuccessPancake}</span> </h4>
                        </div>
                    </div>


                    <div className="col-12">
                        <div className="brand-item-wrap">
                            <ul>
                                <li>
                                    <a href="https://www.dextools.io/app/bsc/pair-explorer/0x693ff254f2e07f4852193f8bf347b3776c630ce4" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/dex.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.mexc.com/de-DE/exchange/KATA_USDT" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/mex.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.bitmart.com/trade/en?symbol=KATA_USDT&layout=basic" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/bit.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.probit.com/app/exchange/KATA-USDT" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/pro.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.hotbit.io/exchange?symbol=KATA_USDT" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/hot.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.digifinex.com/en-ww/trade/USDT/KATA" target="_blank" rel='noreferrer' className="mb-20">
                                        <img src="assets/img/icon/digi.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>




                    </div>
                </div>





                <div className="row justify-content-center mt-100">
                    <div className="col-lg-10">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">Risk <span>warning</span></h2>
                        </div>
                        <div className="purchase-title-paragraph text-center">
                            <p className='hide_text'>Cryptocurrency trading is subject to high market risk.Please make your trades cautiously.Please be advised that Katana Inu is not responsible for your trading losses. You are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you and you shall be solely responsible for any loss or liability therefrom. Before trading, you should conduct your own due diligence and consult your financial advisors. Katana Inu will not be held responsible for the decisions you make to buy, sell, or hold any digital assets. Nothing herein shall be construed as Katana Inu providing any financial advice.</p>
                            <p class="don_t mt-20">If you have any questions please don't hesitate to contact us: <span>support@katanainu.com</span></p>
                            <button onclick="myFunction()" class="go_down open"><i id="myDIV" class="fas fa-angle-down"></i></button>
                        </div>

                    </div>
                </div>










            </div>
            <div className="purchase-img-shape"><img src="assets/img/images/purchase_shape01.png" className="wow fadeInLeftBig" data-wow-delay=".3s" data-wow-duration="2s" alt="" /></div>
            <div className="purchase-img-shape right-shape"><img src="assets/img/images/purchase_shape02.png" className="wow fadeInRightBig" data-wow-delay=".3s" data-wow-duration="2s" alt="" /></div>
        </section>
    )
}

export default PurchaseArea