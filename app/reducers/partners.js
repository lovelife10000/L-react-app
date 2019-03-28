import { GET_PARTNERS_SUCCESS,GET_PARTNERS_FAILURE } from '../actions/types'
import { createReducer } from 'redux-immutablejs'
import {List} from 'immutable'

export default createReducer(List(), {
  [GET_PARTNERS_FAILURE]: (state, action) => state,
  [GET_PARTNERS_SUCCESS]: (state,{json}) => state.merge(json.data)
})