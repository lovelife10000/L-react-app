import React, {Component} from 'react'
import Banner from '../Common/Banner'
import ArticleList from '../Common/ArticleList/index'
import PropTypes from 'prop-types'
import ShowWechat from '../Common/ShowWechat'
import Ads from '../Common/Ads'
import HotArticles from '../Common/HotArticles'
import {connect} from 'react-redux'
import * as Actions from '../../../actions'
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


class LeftColumn extends Component {
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
    const {articleList} = this.props
    return (
      <div className="contianer u-clearfix">
        <div className="left-column">
          <Banner/>
          <ArticleList articleList={articleList}/>
        </div>
        <div className="right-column">
          <ShowWechat/>
          <Ads/>
          <HotArticles/>
        </div>
      </div>
    )

  }
}

export default LeftColumn