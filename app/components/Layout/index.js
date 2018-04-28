import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import PropTypes from 'prop-types'
import * as Actions from '../../actions'

import Footer from './Footer'
import Header from './Header'
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

class Layout extends Component {
  constructor() {
    super()
  }

  static fetchData() {
  }


  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {actions} = this.props
  }

  render() {
    const {} =this.props

    return (
      <div>
        <Header />
        <a href=""></a>

        {renderRoutes(this.props.route.routes)}

        <Footer />


      </div>
    )
  }
}

export default  Layout