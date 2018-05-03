import request from './request'


export default {
    getCategories: function () {

        return request['get']('getCategories')
    },

}