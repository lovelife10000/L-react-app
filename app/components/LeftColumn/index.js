import React,{Component} from  'react'
import Banner from './Banner/index'
import ArticleList from './ArticleList/index'
import PropTypes from 'prop-types'

class LeftColumn extends Component {
  constructor() {
    super()
  }
  static propTypes = {
    articleList: PropTypes.array.isRequired
  };
  render() {
    const {articleList}=this.props
    return (
      <div className="left-column">
        <Banner />
        <ArticleList articleList={articleList}/>
      </div>
    )

  }
}
export default LeftColumn