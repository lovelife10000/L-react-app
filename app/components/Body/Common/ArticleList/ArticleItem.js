import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ArticleItem extends Component {
  constructor() {
    super()
  }

  static propTypes = {
    articleList: PropTypes.array.isRequired
  };

  render() {
    const {articleList}=this.props
    return (
      <div className="blockGroup homeGroup">
        {articleList.items.map((item, index)=>
          <article key={index} className="u-clearfix stream-list-item sticky">
            <div className="stream-list-image">
              <a href="" title="">
                <img width="202" height="145"/></a>
              <div className="stream-list-category">
                <a href="">1</a>
              </div>
            </div>

            <div className="stream-list-content">
              <h2 className="stream-list-title">
                <a href="" title="">{item.title}</a>
                <span className="iconfont icon-hot">1</span>
              </h2>
              <div className="stream-list-meta">
                <span className="avatar-inline">
                  <a href="">
                    <img alt="" height="32" width="32" className="avatar"/>
                  </a>
                </span>
                <span className="author"><a href="">1</a></span>
                <span className="dot">1</span>
                <time>{item.publish_time}</time>
              </div>
              <div className="stream-list-snipper">

              </div>
              <footer className="stream-list-footer">
                <span className="post-views"><span className="iconfont icon-view">1</span>阅读 <span >1</span></span>
                <span className="post-marks"><span
                  className="iconfont icon-heart">1</span>收藏 <span >{item.like_count}</span></span>
                <span className="post-likes"><span
                  className="iconfont icon-zan">1</span>被赞 <span >{item.visit_count}</span></span>
              </footer>
            </div>
          </article>
        )

        }
      </div>
    )

  }
}

export default ArticleItem