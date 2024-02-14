const Footer = () => {
  return (
    <>
      {/* footer-start */}
      <footer>
        <div className="container">
          <div className="footer-top-wrap">
            <div className="footer-widget-wrap">
              <div className="widget">
                <a href="/">
                  <img
                    className="mb-50"
                    src="assets/img/logo/logo.png"
                    alt="Logo"
                  />
                </a>
                <h5 className="fw-title pl-10">Don't miss our latest news</h5>
                <div className="footer-newsletter">
                  <form className="form">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                    />
                    <button type="submit">Subscribe!</button>
                  </form>

                  {/* <form className="form" onSubmit={(e) => Submit(e)}>
                                <input placeholder="Your Email" name="Email" type="text" />
                                <input name="Name" type="submit" />
                            </form> */}
                </div>
                {/* <div className="footer-desc">
                        <h6 className="desc-title">Disclaimer</h6>
                        <p>Nothing on this website constitutes financial advice, and it is always recommended to consult a qualified financial
                            advisor before participating in any token or NFT purchases.</p>
                        </div> */}
              </div>
              <div className="widget">
                <h5 className="fw-title">GAME</h5>
                <ul className="footer-menu">
                  <li>
                    <a
                      href="https://play.katanainu.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/resources/katanainuwhitepaper.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/resources/katanainutokenomics.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://unstake.katanainu.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Unstake
                    </a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="widget">
                <h5 className="fw-title">CONTACT</h5>
                <ul className="footer-menu">
                  <li>
                    <a href="mailto:support@katanainu.com">Contact Us</a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScVXnhpPN1tmdKAczdvd5YDwCo_14oF3VdAp84BK7c9KEKD4Q/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply as Ambassador
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScVXnhpPN1tmdKAczdvd5YDwCo_14oF3VdAp84BK7c9KEKD4Q/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply as Influencer
                    </a>
                  </li>
                </ul>
              </div>

              <div className="widget">
                <h5 className="fw-title">LEGAL</h5>
                <ul className="footer-menu">
                  <li>
                    <a
                      href="Katanainuprivacy.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="termsofservicekatanainu.docx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms Of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="cookiespolicy.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-wrap text-center">
            <p>
              All rights reserved by <span>Chainvision Games</span>
            </p>
          </div>
        </div>
      </footer>
      {/* footer-start-end */}
    </>
  );
};

export default Footer;
