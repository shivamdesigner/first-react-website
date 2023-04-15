import React from 'react'

const About = () => {
  return (
    <div className="About-section">
      <div className="container">
        <div className="row">
          <div className="col-12 about-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-0  bg-content order-lg-1 order-1 order-md-1 ">
                <div className="about-contain ">
                  <h1>Hello!</h1>
                  <h4>We're gymKart- a great place for people serious about health and fitness.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos sequi repellat doloremque ex
                    quisquam ipsam facilis cum a. Minus voluptatum autem id quisquam illo exercitationem error, sit nulla
                    minima!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-0 img-content order-lg-2 order-2 order-md-2">
                <div className="img-box">
                  <img src={require('../asstes/img/about/1.png')} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 about-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-0  bg-content order-lg-2 order-1 order-md-2  ">
                <div className="about-contain ">
                  <h1>Hello!</h1>
                  <h4>We're gymKart- a great place for people serious about health and fitness.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos sequi repellat doloremque ex
                    quisquam ipsam facilis cum a. Minus voluptatum autem id quisquam illo exercitationem error, sit nulla
                    minima!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-0 img-content order-lg-1 order-2 order-md-1 ">
                <div className="img-box">
                  <img src={require('../asstes/img/about/2.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 about-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 p-0  bg-content  order-lg-1 order-1 order-md-1">
                <div className="about-contain ">
                  <h1>Hello!</h1>
                  <h4>We're gymKart- a great place for people serious about health and fitness.</h4>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos sequi repellat doloremque ex
                    quisquam ipsam facilis cum a. Minus voluptatum autem id quisquam illo exercitationem error, sit nulla
                    minima!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-0 img-content order-lg-2 order-2 order-md-2">
                <div className="img-box">
                  <img src={require('../asstes/img/about/3.png')} alt="" />
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="d-flex align-items-center justify-content-center my-2">
          <div className="btn-box">
            <a href="/"><input type="submit" value="Want to work with us?" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
