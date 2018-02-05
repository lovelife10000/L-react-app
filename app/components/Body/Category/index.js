import React, {Component} from 'react'
import CateBanner  from '../Common/CateBanner'
import TagPageHeader  from '../Common/TagPageHeader'
import ArticleItem  from '../Common/ArticleList/ArticleItem'
import PageNavigation  from '../Common/PageNavigation'
import HotTag from '../Common/HotTag'
import Ads from '../Common/Ads'
import HotArticles from '../Common/HotArticles'





class Category extends Component {
  constructor() {
    super()

  }


  render() {


    return (
      <div className="contianer u-clearfix">
        <CateBanner />
        <div className="left-column">
          <TagPageHeader />
          <ArticleItem/>
          <PageNavigation />
        </div>
        <div className="right-column">
          <div className="sidebar">
            <HotTag />
            <Ads />
            <HotArticles />
          </div>
        </div>
      </div>
    )
  }
}

export default Category