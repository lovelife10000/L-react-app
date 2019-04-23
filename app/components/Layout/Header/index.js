import React, {Component} from "react"
import classnames from "classnames"
import styles from "./index.less"
import Nav from "components/Common/Nav"
import logo from "images/logo.png"
import SearchBar from "components/Common/SearchBar"
import {Button} from "antd"

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    const cls = classnames({
      [styles.header]: true
    })
    return (

      <div className={cls}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <a href="/">
              <img className={styles.logo} src={logo}/>
            </a>
          </div>
          <Nav/>
          <div className={styles.searchSession}>
            <SearchBar/>

            <Button type="primary" style={{margin:"0 6px"}}>注册</Button>
            <Button type="primary" style={{margin:"0 6px"}}>登录</Button>
          </div>


        </div>

      </div>


    )
  }
}

export default Header