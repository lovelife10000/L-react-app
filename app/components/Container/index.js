import React, {Component} from 'react'
import LeftColumn from '../LeftColumn/index'
import RightColumn from '../RightColumn/index'

class Container extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="contianer u-clearfix">
        <LeftColumn/>
        <RightColumn/>
      </div>
    )
  }
}

export default Container
