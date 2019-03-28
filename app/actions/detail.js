import types from 'actions/types'
import * as api from 'api'


export const getDetail = () => {
  
  console.log(api)
  
  try{
    console.log(api.getDetail)
  }catch (e) {
    throw(e)

  }

  
  return {
    type: types.getDetail,
    promise: api.getDetail()
  }
}


