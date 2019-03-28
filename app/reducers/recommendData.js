import types from 'actions/types'

import { createReducer } from 'redux-immutablejs'

import {List} from 'immutable'



export default createReducer(List(),{
  [types.getRecommendDataSuccess]: (state,{json})=>state,
  [types.getRecommendDataSuccess]: (state,{json})=>{


    return state.merge(json.data)

  },
  [types.getRecommendDataFailure]: (state,{json})=>{
    return state
  }
})