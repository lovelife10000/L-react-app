import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

class Banner extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        debugger;
        this.getBannerData();
    }

    getBannerData() {
        const {actions} = this.porps;
        actions.getBannerData();
    }

    render() {
        const {bannerData} = this.props;
        return (

            <div>
                <ReactSwipe className="swiper-wrap" swipeOptions={{continuous: false}}>
                    {
                        bannerData.map(function (item, index) {
                            <div key={index} className="swiper-item"><a href={item.data.url}><img src={item.data.srcUrl}
                                                                                                  alt=""/></a></div>
                        })
                    }


                </ReactSwipe>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)