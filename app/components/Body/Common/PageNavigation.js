import React, { Component } from 'react'


class PageNavigation extends Component {
  constructor(){
    super()

  }



  render() {


    return (
      <div className="u-textAlignCenter posts-nav">

        <nav className="navigation pagination" role="navigation">
          <h2 className="screen-reader-text">文章导航</h2>
          <div className="nav-links"><a className="prev page-numbers" href="http://www.woshipm.com/category/pmd/">&lt;</a>
            <a className="page-numbers" href="http://www.woshipm.com/category/pmd/">1</a>
            <span className="page-numbers current">2</span>
            <a className="page-numbers" href="http://www.woshipm.com/category/pmd/page/3">3</a>
            <span className="page-numbers dots">…</span>
            <a className="page-numbers" href="http://www.woshipm.com/category/pmd/page/408">408</a>
            <a className="next page-numbers" href="http://www.woshipm.com/category/pmd/page/3">&gt;</a></div>
        </nav>
      </div>
    )
  }
}

export default PageNavigation