import React, {Component} from 'react'

class HotArticles extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <aside className="widget">
        <h3 className="widget-title">热门文章
          <span className="u-floatRight hot-nav">
            <span className="is-active">收藏</span>
            <span >评论</span>
            <span >点赞</span>
          </span>
        </h3>
        <ul className="hot-question-list widget-posts-list">

          <li className="hot-question-item">
            <span className="num"></span>
            <a href="" className="link"></a>
          </li>


        </ul>
      </aside>
    )
  }
}
export default HotArticles