import types from 'actions/types'
import api from 'api'


export const getDetail = () => {
    return {
        type: types.getDetail,
        promise: api.getDetail()
    }
}


