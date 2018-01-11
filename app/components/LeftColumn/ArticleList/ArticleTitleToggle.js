import React, {Component} from 'react'

class ArticleTitleToggle extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      < nav className="index-nav u-clearfix">
        < span className="current load-new-posts"> 最新文章 </span>
        < span className="load-hot-posts"> 7
    日热文 </span >
        < span className="load-hot-questions"> 热门问答 </span >
        < span className=""><a href=""> 专题页 </a> </span>
      </nav >
    )
  }
}

export default ArticleTitleToggle