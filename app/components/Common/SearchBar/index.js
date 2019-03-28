import React, { Component } from 'react'
import { Input } from 'antd'
const Search = Input.Search
// import styles from './index.less';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from 'actions'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.toJS()
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {



  }



  render() {


    // const { categories } = this.props;

    return (


      <Search
        placeholder="搜索"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />




    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)