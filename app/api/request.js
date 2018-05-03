require('es6-promise').polyfill()
import axios from 'axios'
import {devDomain, prodDomain} from 'config/app.config'
import {getCookie, signOut} from 'utils/authService'

const isDev = process.env.NODE_ENV === 'development';
axios.defaults.baseURL = isDev ? devDomain : prodDomain;
axios.defaults.withCredentials = true

// 请求拦截
axios.interceptors.request.use(function (config) {

    config.headers = config.headers || {}
    if (getCookie('token')) {
        config.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    }
    return config
}, function (error) {

    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(function (response) {
    if (response.status === 401) {
        signOut()
        window.location.pathname = '/login'
    }
    return response
}, function (error) {

    return Promise.reject(error)
})


export default axios
