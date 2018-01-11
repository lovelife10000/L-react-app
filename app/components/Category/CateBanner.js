import React, {Component} from 'react'

class CateBanner extends Component {
  constructor() {
    super()

  }


  render() {

    return (
      <div className="cate-banner">
        <section className="cover cover--grid4">
          <article className="cover-story">
            <div className="cover-image" ></div>
            <a className="cover-trigger" href="">1</a>
            <header className="cover-header">
              <h2 className="cover-title"><a href="">社交产品怎样戳中用户的心？</a>
              </h2>
              <div className="cover-meta"><a href="">丢丢聊产品</a><span className="dot">1</span>阅读 6.5k
              </div>
            </header>
          </article>
          <article className="cover-story">
            <div className="cover-image" ></div>
            <a className="cover-trigger" href="">1</a>
            <header className="cover-header">
              <h2 className="cover-title"><a href="">VR产品经理怎么讲好故事？5个探索者给出了方向</a>
              </h2>
              <div className="cover-meta"><a href="">fanna211</a><span className="dot">1</span>阅读 3.4k
              </div>
            </header>
          </article>
          <article className="cover-story">
            <div className="cover-image" ></div>
            <a className="cover-trigger" href="">1</a>
            <header className="cover-header">
              <h2 className="cover-title"><a href="">作为P2P产品经理，你应该知道的债权转让</a>
              </h2>
              <div className="cover-meta"><a href="">张小璋</a><span className="dot">1</span>阅读 5.9k
              </div>
            </header>
          </article>
          <article className="cover-story">
            <div className="cover-image" ></div>
            <a className="cover-trigger" href="">1</a>
            <header className="cover-header">
              <h2 className="cover-title"><a href="">产品经理的跨域：全栈是一个美丽的谎言</a>
              </h2>
              <div className="cover-meta"><a href="">枯叶</a><span className="dot">1</span>阅读 1.6万
              </div>
            </header>
          </article>
        </section>
      </div>
    )
  }
}

export default  CateBanner