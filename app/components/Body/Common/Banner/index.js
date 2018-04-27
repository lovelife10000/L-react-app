import React, {Component} from 'react'
import Slider  from 'react-slick';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';
import styles from './index.less'

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

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.getBannerData();

    }

    getBannerData() {
        const {actions} = this.props;
        actions.getBannerData();
    }

    render() {
        const {bannerData} = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (

            <div>
                <Slider  className={styles.swiperWrap}  {...settings} >
                    {
                        bannerData.map((item,index)=>(
                            <li key={index}>

                                <a href={item.url}>{item.url}<img src={item.srcUrl} alt=""/></a></li>
                        ))
                    }

                </Slider >
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)