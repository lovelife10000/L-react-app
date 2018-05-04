import React, {Component} from 'react'
import { Input } from 'antd';
const Search = Input.Search;
import styles from './index.less';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from 'actions'

const mapStateToProps = (state) => {
    return {

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {



    }



    render() {


        const {categories} = this.props;

        return (


                <Search
                    placeholder="搜索"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />




        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)