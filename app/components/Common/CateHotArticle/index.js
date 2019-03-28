import React, { Component } from 'react'
import Slider from 'react-slick'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from 'actions'
import styles from './index.less'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    bannerData: state.bannerData.toJS()
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
    bannerData: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {

    this.getBannerData()

  }

  getBannerData() {
    const { actions } = this.props
    actions.getBannerData()
  }

  render() {
    const { bannerData } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (


      <Slider className={styles.swiperWrap}  {...settings} >
        {
          bannerData.map((item, index) => (
            <li key={index}>

              <a href={item.url}>
                <h3>这是文章标题</h3><img src={item.srcUrl} alt="" /></a></li>
          ))
        }

      </Slider >

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CateBanner)