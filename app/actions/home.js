import types from 'actions/types'
import * as api from 'api'
// import {getUserInfo} from './auth'

//获取标签列表.
export const getTagList = () => {
  return {
    type: types.TAG_LIST,
    promise: api.getTagList()
  }
}






/*获取文章列表*/
export const getArticleList = (isAdd = true) => {

  return {
    type: types.getArticleList,
    promise: api.getArticleList()
  }

}



export const getCateArticleList = () => {
  return {
    type: types.getCateArticleList,
    promise: api.getCateArticleList()
  }

}

//获取文章详情
export const getArticleDetail = (id) => {
  return (dispatch, getState) => {
    console.log('getState is what', getState());
    const auth = getState().auth.toJS()
    return api.getArticleDetaile(id)
      .then(response => ({ json: response.data, status: response.statusText }))
      .then(({ json, status }) => {
        let isLike = false
        let article = json.data
        if (auth.user) {
          auth.user.likes.map(item => {
            if (item.toString() === article._id) {
              isLike = true
            }
          })
        }
        return dispatch({
          type: types.ARTICLE_DETAIL_SUCCESS,
          articleDetail: { ...article, isLike: isLike }
        })
      })
      .catch(error => {
        return dispatch({
          type: types.ARTICLE_DETAIL_FAILURE
        })
      })
  }
}

