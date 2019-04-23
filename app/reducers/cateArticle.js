import types from "actions/types"
import { createReducer } from "redux-immutablejs"
import {List} from "immutable"

export default  createReducer(List(),{
  [types.getCateArticleListRequest]: (state,{json})=>state,
  [types.getCateArticleListSuccess]: (state,{json})=>{
    return state.merge(json.data)
  },
  [types.getCateArticleListFailure]: (state,{json})=>state
})

