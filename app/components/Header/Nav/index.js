import React, {Component} from 'react'

import styles from './index.less';

class Nav extends Component {
    constructor() {
        super()
    }

    render() {

        return (

                <div className={styles.navWrap}>
                    <nav className={styles.headerNav}>
                        <ul>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                            <li><a href="">首页</a></li>
                        </ul>
                    </nav>
                </div>





        )
    }
}

export default Nav