import categoryApi from 'api/category'
import  types from 'actions/types'

export const getCategories = () => {

    return {

        type: types.getCategories,
        promise: categoryApi.getCategories()
    }
};

