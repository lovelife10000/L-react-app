import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import PropTypes from 'prop-types'
import * as Actions from '../../actions'

import SiteFoot from '../Footer'
import Header from '../Header'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
const mapStateToProps = state => {
  return {
    partners: state.partners.toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)

class App extends Component {
  constructor() {
    super()
  }

  static fetchData() {
    return [Actions.getPartners()]
  }


  static propTypes = {
    route: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    partners: PropTypes.array.isRequired
  };

  componentDidMount() {
    const {actions, partners} = this.props
    if (partners.length < 1) {
      actions.getPartners()
    }
  }

  render() {
    const {partners} =this.props

    return (
      <div>
        <Header />
        <a href="">{partners.length}</a>

        {renderRoutes(this.props.route.routes)}

        <SiteFoot />


      </div>
    )
  }
}

export default  App