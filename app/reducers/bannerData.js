

import { createReducer } from 'redux-immutablejs'

import {List} from 'immutable'



export default createReducer(List(),{
  'GET_BANNER_DATA_SUCCESS': (state,action)=>{
debugger;
    return state.merge({
      token: action.token
    })
  },
  'GET_BANNER_DATA_FAILURE': (state,{json})=>{
    return state.merge({
      user: json
    })
  }
})