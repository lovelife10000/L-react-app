import React, {Component} from 'react'
import ArticleItem from './ArticleItem'
import LoadMore from './LoadMore'
import PropTypes from 'prop-types'


class ArticleList extends Component {
  constructor() {
    super()
  }

  static propTypes = {
    articleList: PropTypes.array.isRequired
  };

  render() {
    const {articleList}=this.props
    return (
      <section className="bigfa-ajax-wrapper">
        <ArticleItem articleList={articleList}/>
        <LoadMore />
      </section>
    )
  }
}

export default ArticleList