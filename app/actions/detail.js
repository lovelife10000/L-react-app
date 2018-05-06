import types from 'actions/types'
import * as api from 'api'


export const getDetail = () => {
    debugger
    console.log(api);
    debugger
    try{
        console.log(api.getDetail);
    }catch (e) {
        throw(e)

    }

    debugger
    return {
        type: types.getDetail,
        promise: api.getDetail()
    }
}


