import React, {Component} from 'react'

class ArticleItem extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <article className="u-clearfix stream-list-item sticky">
        <div className="stream-list-image">
          <a href="" title="">
            <img width="202" height="145"/></a>
          <div className="stream-list-category">
            <a href=""></a>
          </div>
        </div>

        <div className="stream-list-content">
          <h2 className="stream-list-title">
            <a  href="" title=""></a>
            <span className="iconfont icon-hot"></span>
          </h2>
          <div className="stream-list-meta">
            <span className="avatar-inline">
              <a href="">
                <img alt="" height="32" width="32" className="avatar"/>
              </a>
            </span>
            <span className="author"><a href=""></a></span>
            <span className="dot"></span>
            <time></time>
          </div>
          <div className="stream-list-snipper">

          </div>
          <footer className="stream-list-footer">
            <span className="post-views"><span className="iconfont icon-view"></span>阅读 <span ></span></span>
            <span className="post-marks"><span className="iconfont icon-heart"></span>收藏 <span ></span></span>
            <span className="post-likes"><span className="iconfont icon-zan"></span>被赞 <span ></span></span>
          </footer>
        </div>
      </article>
    )
  }
}

export default ArticleItem