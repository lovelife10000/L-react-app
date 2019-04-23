import React, { Component } from "react"
import Slider from "react-slick"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as Actions from "actions"
import styles from "./index.less"
import PropTypes from "prop-types"

const mapStateToProps = (state) => {
  return {
    cateBannerData: state.cateBannerData.toJS()
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

class CateBanner extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    cateBannerData: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {

    this.getCateBannerData()

  }

  getCateBannerData() {
    const { actions } = this.props

    actions.getCateBannerData()
  }

  render() {

    const { cateBannerData } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (


      <Slider className={styles.cateBanner}  {...settings} >
        {
          cateBannerData.map((item, index) => (
            <li key={index}>

              <a href={item.url}>

                <div className={styles.cateText}>
                  <div className="cateTextInner">
                    <h3>{item.title}</h3>
                    <p>{item.abstract}</p>
                    <ul>
                      <li>{item.author + "."}</li>
                      <li>{item.click}</li>
                    </ul>
                  </div>

                </div>
                <img src={item.srcUrl} alt="" /></a></li>
          ))
        }

      </Slider>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CateBanner)