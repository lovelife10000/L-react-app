import React, {Component} from 'react'
import CateBanner  from './CateBanner'
import TagPageHeader  from './TagPageHeader'
import ArticleItem  from '../LeftColumn/ArticleList/ArticleItem'
import PageNavigation  from './PageNavigation'
import HotTag from '../RightColumn/HotTag'
import Ads from '../RightColumn/Ads'
import HotArticles from '../RightColumn/HotArticles'





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