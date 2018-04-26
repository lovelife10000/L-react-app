import React, {Component} from 'react'
import classnames from 'classnames';
import styles from './index.less';
import Nav from './Nav'
import logo from 'images/logo.png'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        const cls = classnames({
            [styles.header]: true
        });
        return (
            <div>
                <div className={cls}>
                    <div className={styles.headerInner}>
                        <div className={styles.logo}>
                            <a href="/">
                                <img className={styles.logo} src={logo}/>
                            </a>
                        </div>
                        <Nav/>
                    </div>

                </div>

            </div>

        )
    }
}

export default Header