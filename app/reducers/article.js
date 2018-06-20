import types from 'actions/types'
import { createReducer } from 'redux-immutablejs'
import {List} from 'immutable'

export const articleList = createReducer(List(),{
  [types.getArticleListRequest]: (state,{json})=>state,
  [types.getArticleListSuccess]: (state,{json})=>{
    return state.merge(json.data)
  },
  [types.getArticleListFailure]: (state,{json})=>state
})

