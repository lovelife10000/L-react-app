import React, {Component} from 'react'

class SiteFoot extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="contianer u-clearfix footer-top">
          <div className="footer-block-left">
            <p className=""><img src="/resources/views/index/woshipm/assets/images/footer-logo.png"/></p>
            <a className="a-font mar-r27" href="http://zt.woshipm.com/5years/index.html">关于我们</a>
            <a className="a-font" href="http://www.woshipm.com/tougao">投稿须知</a>
            <a className="a-font mar-r27" href="http://wen.woshipm.com/question/detail/omkf.html">意见反馈</a>
            <a className="a-font" href="http://www.woshipm.com/disclaimer">免责声明</a>
          </div>
          <div className="footer-block-center">
            6Viralnova中文网基于快速开放的互联网的发展速度，尤其是快速增长的社交网络上的空白。随着个性化和翔实的讲故事的交流，Viralnova中文网提供了一个独特的平台，，通过各种许多不同类别的文章推荐。它的建立，填补社会对我们周围的世界产生积极的，有趣的影响。

            无论是娱乐，信息，或一个原因，我们的故事广受各年龄层，性别和国籍的人共享。我们不是政治。我们不要有成见。而且我们没有不可告人的目的。我们只是想讲一个故事，你不会忘记的故事。

          </div>
          <div className="u-floatRight">
            <ul className="site-icon-list">
              <li>
                <div className="app-qrcode">
                  <img src="/resources/views/index/woshipm/assets/images/footer-appdownload.png"/>
                </div>
                <span className="iconfont icon-android"></span>
              </li>
              <li>
                <div className="app-qrcode">
                  <img src="/resources/views/index/woshipm/assets/images/footer-wechat.png"/>
                </div>
                <span className="iconfont icon-wechat"></span>
              </li>
              <li>
                <div className="app-qrcode">
                  <img src="/resources/views/index/woshipm/assets/images/footer-appdownload.png"/>
                </div>
                <span className="iconfont icon-ios"></span>
              </li>
              <li>
                <a href="http://weibo.com/526006123"  title="关注新浪微博"><span
                  className="iconfont icon-weibo"></span></a>
              </li>
            </ul>
            <div className="u-textAlignCenter site-tel">合作/建议/投诉: qq1358180015</div>
          </div>
        </div>
        <div className="u-textAlignCenter copyright">Copyright © 2017-2017 VIRALNOVA.WANG - Viralnova中文网 - <a
          href="http://www.miibeian.gov.cn/">赣ICP备15002649号-5</a></div>
      </footer>
    )
  }
}

export default SiteFoot