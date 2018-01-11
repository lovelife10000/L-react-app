import React,{Component} from  'react'
import Banner from './Banner/index'
import ArticleList from './ArticleList/index'


class LeftColumn extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="left-column">
        <Banner />
        <ArticleList />
      </div>
    )

  }
}
export default LeftColumn