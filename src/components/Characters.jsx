import ModelViewer from "./3dmodel/ModelViewer"


const Characters = () =>{

    return (
      <>
      {/* character */}
      <section className="character-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-180">
                <h5 className="sub-title element paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">READY TO SLASH?</h5>
                <h2 className="title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">Choose your warrior</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cascade-slider_container" id="cascade-slider">
                  <div className="cascade-main position-relative">
                    <span className="cascade-slider_arrow cascade-slider_arrow-left" data-action="prev">
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <div className="cascade-slider_slides">
                        <div className="cascade-slider_item">
                            <ModelViewer src="assets/img/characters/Ape2.glb"/>
                            <div className="text" data-index="0">
                              <h2>Kape</h2>
                            </div>
                        </div>
                        <div className="cascade-slider_item">
                          <ModelViewer src="assets/img/characters/BC_pose07.glb"/>
                          <div className="text" data-index="1">
                          <h2>Blockchain</h2>
                          </div>
                        </div>
                        <div className="cascade-slider_item">
                            <ModelViewer src="assets/img/characters/Bear_pose03.glb"/>
                            <div className="text" data-index="0">
                              <h2>Bear</h2>
                            </div>
                        </div>
                      <div className="cascade-slider_item">
                        <ModelViewer src="assets/img/characters/KI_Samurai_pose03.glb" />
                          <div className="text" data-index="0">
                            <h2>Katana Inu</h2>
                          </div>
                      </div>
                    </div>
                    <span className="cascade-slider_arrow cascade-slider_arrow-right" data-action="next">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                  {/* <div className="cascade-slider-nav">

                    <div className="contexts">
                      <div className="contents-inner">
                        <div className="text" data-slide-number="0">
                          <h2>Kape</h2>
                        </div>
                        <div className="text" data-slide-number="1">
                          <h2>Bear</h2>
                        </div>
                        <div className="text" data-slide-number="2">
                          <h2>Blockchain</h2>
                        </div>
                        <div className="text" data-slide-number="3">
                          <h2>Katana Inu</h2>
                        </div>
                      </div>
                    </div>

                  </div> */}
              </div>


            </div>
          </div>
        </div>
      </section>
      {/* character-end */}
      </>
    )
}

export default Characters