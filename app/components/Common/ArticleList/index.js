import React, {Component} from 'react'
import {findDomNode} from 'react-dom'
import styles from './index.less'
import PropTypes from 'prop-types'
import {Tabs} from 'antd';
import z from 'images/avatar.png'


import {connect} from 'react-redux'
import * as Actions from 'actions'
import {bindActionCreators} from 'redux'

const TabPane = Tabs.TabPane;

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

class ArticleList extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        articleList: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {actions} = this.props
        this.getArticleList()
        // window.addEventListener('scroll', this.orderScroll.bind(this));
    }

    getArticleList() {
        const {actions} = this.props;
        actions.getArticleList();


    }
    addArticleList(){
        const {actions}=this.props
        actions.addArticleList(10);
    }


    // orderScroll() {
    //     console.log('滚动条滚动了');
    //     const dom = this.refs.tag
    //
    //     const y1 = dom.getBoundingClientRect().top
    //
    //     const y2 = window.innerHeight;
    //     if (y1 < y2) {
    //         const {actions} = this.props;
    //         actions.addArticleList();
    //     }
    //
    // }

    callback(key) {
        console.log(key);
    }

    render() {
        const {articleList} = this.props
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="文章" key="1">
                        {
                            articleList.map((item,index)=>(
                                <article key={index} className={styles.articleWrap}>
                                    <a className={styles.articleImg}><img src={item.img} alt=""/></a>
                                    <div className={styles.articlePanel}>
                                        <a className={styles.title} href="">{item.title}</a>
                                        <p>{item.abstract}</p>

                                        <div className={styles.soMuch}>
                                            <ul className={styles.authorWrap}>
                                                <li><a href=""><img src={item.avatar} alt=""/></a></li>
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


                    </TabPane>

                    <TabPane tab="Tab 2" key="2">

                        {
                            articleList.map((item,index)=>(
                                <article key={index} className={styles.articleWrap}>
                                    <a className={styles.articleImg}><img src={item.img} alt=""/></a>
                                    <div className={styles.articlePanel}>
                                        <a className={styles.title} href="">{item.title}</a>
                                        <p>{item.abstract}</p>

                                        <div className={styles.soMuch}>
                                            <ul className={styles.authorWrap}>
                                                <li><a href=""><img src={item.avatar} alt=""/></a></li>
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
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>

                </Tabs>
                <div ref="tag"></div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)