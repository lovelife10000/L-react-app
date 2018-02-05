import React, {Component} from 'react'
import LeftColumn from '../LeftColumn/index'
import RightColumn from '../RightColumn/index'
import * as Actions from '../../actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state)=> {
  return {
    articleList: state.articleList.toJS()
  }
};


const mapDispatchToProps = (dispatch)=> {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
};

@connect(mapStateToProps, mapDispatchToProps)


class Container extends Component {
  constructor() {
    super()
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    articleList: PropTypes.array.isRequired
  };

  static fetchData() {
    return [Actions.getArticleList()]
  }
  componentDidMount() {
    const {actions, articleList} = this.props
    if (articleList.length < 1) {
      actions.getArticleList()
    }
  }

  render() {


    const {articleList}=this.props
    return (
      <div className="contianer u-clearfix">
        <LeftColumn articleList={articleList}/>
        <RightColumn/>
      </div>
    )
  }
}

export default Container
