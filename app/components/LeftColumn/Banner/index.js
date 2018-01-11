import React, {Component} from 'react'

class Banner extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="banner">
        <div className="tabBox u-clearfix">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="">
                  <img alt=""/>
                  <h3></h3>
                </a>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>

          <div className="hd smallScroll">
            <ul className="">

              <li >
                <a href="http://www.woshipm.com/pmd/662334.html" title="">
                  <img />
                </a>
                <h3>
                  <a href="http://www.woshipm.com/pmd/662334.html" title=""></a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default Banner