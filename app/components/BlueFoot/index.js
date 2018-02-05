import React, {Component} from 'react'
import Partner from './Partner'
import FriendLink from './FriendLink'
import PropTypes from 'prop-types'

class BlueFoot extends Component {
  constructor() {
    super()
  }

  static  propTypes={
    partners:PropTypes.array.isRequired
  };
  render() {
    const {partners}=this.props

    return (
      <div className="blue-foot mar-t35">
        <div className="foot-box contianer">
          <h3 className="f-tit-h3 icon1">合作伙伴</h3>

          <Partner partners={partners}/>

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