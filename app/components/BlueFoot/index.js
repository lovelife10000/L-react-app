import React, {Component} from 'react'
import Partner from './Partner'
import FriendLink from './FriendLink'

class BlueFoot extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="blue-foot mar-t35">
        <div className="foot-box contianer">
          <h3 className="f-tit-h3 icon1">合作伙伴</h3>

          <Partner />

          <h3 className="f-tit-h3 icon2 mar-t5">友情链接</h3>
          <div className="blue-link-box">

            <FriendLink />

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlueFoot