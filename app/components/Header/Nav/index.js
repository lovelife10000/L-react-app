import React, {Component} from 'react'
import classNames from 'classnames';
import styles from 'index.less';

class Nav extends Component {
    constructor() {
        super()
    }

    render() {
        const cls=classNames({
            [styles.nav]: true,

        });
        return (
            <div className={cls}>
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
            </div>


        )
    }
}

export default Nav