import React, { Component } from 'react'
// import {findDomNode} from 'react-dom'
import styles from './index.less'
import PropTypes from 'prop-types'

// import z from 'images/avatar.png'


import { connect } from 'react-redux'
import * as Actions from 'actions'
import { bindActionCreators } from 'redux'



const mapStateToProps = (state) => {
  return {
    cateArticleList: state.cateArticleList.toJS()
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
};

class CateArticleList extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    cateArticleList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {

    // const { actions } = this.props
    this.getCateArticleList()

  }

  getCateArticleList() {
    const { actions } = this.props;
    actions.getCateArticleList();


  }







  render() {
    const { cateArticleList } = this.props
    return (
      <div className={styles.cateArticle}>
        <div className={styles.cateArticleHead}>
          <div><span>产品经理</span></div>

        </div>
        <div className={styles.cateArticleList}>
          {
            cateArticleList.map((item, index) => (
              <article key={index} className={styles.articleWrap}>
                <a className={styles.articleImg}><img src={item.img} alt="" /></a>
                <div className={styles.articlePanel}>
                  <a className={styles.title} href="">{item.title}</a>
                  <p>{item.abstract}</p>

                  <div className={styles.soMuch}>
                    <ul className={styles.authorWrap}>
                      <li><a href=""><img src={item.avatar} alt="" /></a></li>
                      <li><a href="">{item.author}</a></li>
                      <li>日期</li>
                    </ul>
                    <ul className={styles.count}>
                      <li>点击</li>
                      <li>点击</li>
                      <li>点击</li>
                    </ul>

                  </div>

                </div>

              </article>
            ))
          }


        </div>




        <div ref="tag"></div>
      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CateArticleList)