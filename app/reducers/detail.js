import types from 'actions/types'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { API_ROOT } from '../config/app.config'

export default createReducer(fromJS({
  detail:null,
}), {
  [types.getDetailRequest]: (state, action) => state,
  [types.getDetailSuccess]: (state, {json}) => state.merge(json.data),
  [types.getDetailFailure]: (state, {json}) => state
})