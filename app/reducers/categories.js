import {createReducer} from 'redux-immutablejs'
import {List} from 'immutable'
import types from 'actions/types'


export default createReducer(List(), {
  [types.getCategoriesRequest]: (state, action) => state,
  [types.getCategoriesSuccess]: (state, {json}) => state.merge(json.data),
  [types.getCategoriesFailure]: (state, action) => state,
})


