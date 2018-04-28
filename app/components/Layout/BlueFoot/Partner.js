import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Partner extends Component {
  constructor() {
    super()
  }

  static propTypes = {
    partners: PropTypes.array.isRequired,
  };

  render() {
    const {partners}=this.props
    return (
      <ul className="blue-pic-ul">
        {partners.map((item, index)=>
          <li key={index}>
            <a href={item.url} title={item.name}>
              <img src={item.img} alt={item.name} title={item.name}/>
            </a>
          </li>
        )}


      </ul>

    )
  }
}

export default Partner