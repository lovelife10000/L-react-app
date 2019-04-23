import * as api from "api"
import  types from "actions/types"

export const getCategories = () => {

  return {

    type: types.getCategories,
    promise: api.getCategories()
  }
}

