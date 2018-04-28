import React, {Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';
import styles from './index.less'

const mapStateToProps = (state) => {
    return {
        recommendData: state.recommendData.toJS()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

class Recommend extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.getRecommendData();

    }

    getRecommendData() {
        const {actions} = this.props;

        actions.getRecommendData();
    }

    render() {
        const {recommendData} = this.props;

        return (

            <ul className={styles.recommend}>

                    {
                        recommendData.map((item,index)=>(
                            <li key={index}>

                                <a href={item.url}>
                                    <h3>{item.title}</h3><img src={item.img} alt=""/></a></li>
                        ))
                    }


            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)