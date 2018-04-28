import React, {Component} from 'react'
import styles from './index.less'
class Footer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className={styles.footer}>

        <div className={styles.copyright}>Copyright © 2017-2018 LIJUN1991.COM - 前端开发网 - <a
          href="http://www.miibeian.gov.cn/">赣ICP备15002649号-5</a></div>
      </footer>
    )
  }
}

export default Footer