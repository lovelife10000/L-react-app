import React, {Component} from 'react'
import ShowWechat from './ShowWechat'
import Ads from './Ads'
import HotArticles from './HotArticles'

class RightColumn extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="right-column">
        <ShowWechat />
        <Ads />
        <HotArticles />
      </div>
    )
  }
}
export default RightColumn