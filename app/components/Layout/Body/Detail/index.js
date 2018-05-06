import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Actions from 'actions'
import styles from './index.less'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        detail: state.detail.toJS()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)

class Detail extends Component {
    constructor() {
        super()
    }

    static fetchData() {
    }


    static propTypes = {
        actions: PropTypes.object.isRequired,
    };

    componentDidMount() {
        debugger
        const {actions} = this.props
        debugger
actions.getDetail()
    }

    render() {
        const {detail} = this.props
        return (
            <div className={styles.det+" container"}>

                <div className={styles.leftColumn}>
                    <div className={styles.detTitle}>
                        <p className={styles.title}>{detail.title}</p>
                        <ul className={styles.authorPan}>
                            <li><a href=""><img src={detail.avatar} alt=""/></a></li>
                            <li>
                                <p>{detail.author}</p>
                                <p>{detail.xinqing}</p>
                            </li>
                            <ul className={styles.countPan}>
                                <li><i className="fa fa-clock-o  pull-left"></i>{detail.updateTime}</li>
                                <li><i className="fa fa-eye  pull-left"></i>{detail.click}</li>
                                <li><i className="fa fa-star  pull-left"></i>{detail.collection}</li>
                                <li><i className="fa fa-thumbs-up pull-left"></i>{detail.like}</li>
                            </ul>
                        </ul>

                    </div>
                    <div className={styles.detAbstract}><blockquote><p>{detail.abstract}</p></blockquote>   </div>
                    <div className={styles.detContent}>
                        <div dangerouslySetInnerHTML={{__html: detail.content}} />

                    </div>
                </div>
                <div className="rightColumn"></div>


            </div>
        )
    }
}

export default Detail