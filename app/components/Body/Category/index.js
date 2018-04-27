import React, {Component} from 'react'
import CateBanner  from '../Common/CateBanner'
import TagPageHeader  from '../Common/TagPageHeader'

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
      <div className="">
        <CateBanner />
        <div className="left-column">
          <TagPageHeader />

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