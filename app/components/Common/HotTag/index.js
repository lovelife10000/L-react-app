import React, {Component} from 'react'
import {Dropdown, Icon, Menu} from 'antd';
import styles from './index.less';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from 'actions'

const mapStateToProps = (state) => {
    return {
        categories: state.categories.toJS()
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

class HotTag extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        const {categories, actions} = this.props
        if (categories.length < 1) {

            actions.getCategories()
        }
    }

    getChildMenu(data) {
        return (
            <Menu>
                {
                    data.children.map((item, index) => (

                        <Menu.Item key={index}>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">{item.name}</a>
                        </Menu.Item>


                    ))}
            </Menu>
        )
    }


    render() {


        const {categories} = this.props;

        return (

            <div className={styles.navWrap}>
                <nav className={styles.headerNav}>

                    {categories.map((item, index) => (

                        item.children ?

                            <Dropdown overlay={this.getChildMenu(item)}>
                                <a className="ant-dropdown-link" href="#">
                                    {item.name} <Icon type="down"/>
                                </a>
                            </Dropdown> :
                            <a className="ant-dropdown-link" href="#">
                                {item.name} <Icon type="down"/>
                            </a>

                    ))}


                </nav>
            </div>


        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotTag)