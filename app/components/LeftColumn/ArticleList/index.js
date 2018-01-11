import React, {Component} from 'react'
import ArticleItem from './ArticleItem'
import LoadMore from './LoadMore'

class ArticleList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="bigfa-ajax-wrapper">
        <div className="blockGroup homeGroup">
          <ArticleItem />
        </div>
        <LoadMore />
      </section>
    )
  }
}

export default ArticleList