import React, {Component} from 'react'
import CateBanner from '../../../Common/CateBanner'

import styles from './index.less'
import CateArticleList from '../../../Common/CateArticleList'


class Category extends Component {
    constructor() {
        super()

    }
    componentDidMount() {
        console.log(777)
        debugger

    }

    render() {


        return (
            <div className={styles.container}>
                <div className={styles.cateSubHead}>
                    <CateBanner/>
                </div>

                <div className={styles.body}>
                    <div className={styles.leftColumn}>
                        <CateArticleList/>



                    </div>
                    <div className={styles.rightColumn}>
                        <div className="sidebar">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Category


