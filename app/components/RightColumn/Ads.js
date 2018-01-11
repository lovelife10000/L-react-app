import React, {Component} from 'react'

class Ads extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="widget-ad">
          <a href=""><img src="/public/upload/image/ad1.png" alt=""/></a>
        </div>
        <div className="widget-ad">
          <a><img src="/public/upload/image/ad2.jpg"/></a>
        </div>
        <div className="widget-ad">
          <a><img src="/public/upload/image/ad3.jpg"/></a>
        </div>
      </div>
    )
  }
}
export default Ads