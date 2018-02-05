import React, {Component} from 'react'
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import little1 from '../../../assets/images/little1.gif'
import little2 from '../../../assets/images/little2.gif'
import little3 from '../../../assets/images/little3.gif'
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
                  <img alt="" src={banner1}/>
                  <h3>1111111111111111</h3>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="">
                  <img alt="" src={banner2}/>
                  <h3>222222222222222222222</h3>
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
                  <img src={little1}/>
                </a>
                <h3>
                  <a href="http://www.woshipm.com/pmd/662334.html" title="">111</a>
                </h3>
              </li>
              <li >
                <a href="http://www.woshipm.com/pmd/662334.html" title="">
                  <img src={little2}/>
                </a>
                <h3>
                  <a href="http://www.woshipm.com/pmd/662334.html" title="">222</a>
                </h3>
              </li>
              <li >
                <a href="http://www.woshipm.com/pmd/662334.html" title="">
                  <img src={little3}/>
                </a>
                <h3>
                  <a href="http://www.woshipm.com/pmd/662334.html" title="">333</a>
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