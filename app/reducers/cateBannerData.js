
import types from 'actions/types'
import { createReducer } from 'redux-immutablejs'

import {List} from 'immutable'



export default createReducer(List(),{
  [types.getCateBannerDataSuccess]: (state,{json})=>{

    return state.merge(json.data)

  },
  [types.getCateBannerDataFailure]: (state,{json})=>{
    return state
  }
})