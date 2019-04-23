

import { createReducer } from "redux-immutablejs"

import {List} from "immutable"



export default createReducer(List(),{
  "GET_BANNER_DATA_SUCCESS": (state,{json})=>{

    return state.merge(json.data)

  },
  "GET_BANNER_DATA_FAILURE": (state,{json})=>{
    return state
  }
})