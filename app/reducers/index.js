import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import {articleList} from './article'
import tagList from './tagList'
import commentList from './comment'
import auth from './auth'
import options from './options'
import apps from './apps'
import sns from './sns'
import showmsg from './showmsg'
import globalVal from './globalVal'
import partners from './partners'
import bannerData from './bannerData'
import recommendData from './recommendData'
import cateBannerData from './cateBannerData'
import cateArticleList from './cateArticle'
import detail from './detail'
import categories from './categories'


const rootReducer = combineReducers({
    globalVal,
    apps,
    sns,
    tagList,
    articleList,
    commentList,
    recommendData,
    options,
    auth,
    showmsg,
    router: routerReducer,
    form: formReducer,
    partners,
    bannerData,
    cateBannerData,
    detail,
    categories,
    cateArticleList,

})

export default rootReducer
