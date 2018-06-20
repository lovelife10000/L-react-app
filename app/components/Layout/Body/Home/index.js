import React, {Component} from 'react'
import Banner from '../../../Common/Banner'
import ArticleList from '../../../Common/ArticleList/index'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as Actions from 'actions'
import {bindActionCreators} from 'redux'
import styles from './index.less'
import Recommend from '../../../Common/Recommend'


const mapStateToProps = (state) => {
  return {
    articleList: state.articleList.toJS()
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
};




class Home extends Component {
  constructor() {
    super()

  }


    static propTypes = {
      actions: PropTypes.object.isRequired,
      articleList: PropTypes.array.isRequired
    };

    static fetchData() {
      return [Actions.getArticleList()]
    }

    componentDidMount() {

      const {actions, articleList} = this.props
      if (articleList.length < 1) {

        actions.getArticleList()
      }
    }



    render() {
      const {articleList} = this.props

      return (

        <div className={styles.container}>
          <div className={styles.subHead}>
            <Banner/>
            <Recommend/>
          </div>
          <div className={styles.body}>

            <div className={styles.leftColumn}>

              <ArticleList articleList={articleList}/>
            </div>
            <div className={styles.rightColumn}>
            </div>
          </div>
        </div>
      )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
