require('es6-promise').polyfill()
import axios from 'axios'
import { devDomain,prodDomain } from '../config/app.config'
import { getCookie,signOut } from '../utils/authService'
const isDev=process.env.NODE_ENV === 'development';
axios.defaults.baseURL = isDev ? devDomain :prodDomain;
axios.defaults.withCredentials = true

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers = config.headers || {}
  if (getCookie('token')) {
    config.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.status === 401) {
    signOut()
    window.location.pathname = '/login'
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export const UserResource = (method, id, data, api='users') => {
  return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const AuthResource = (method, id, data, api='auth') => {
  return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const ArticleResource = (method, id, controller, data, api='article') => {
  return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}
export const TagResource = (method, id, data, api='tags') => {
  return axios[method](api + (id ? ('/' + id) : ''), data)
}
export const CommentResource = (method, id, controller, data, api='comment') => {
  return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}
export const MobileResource = (method, id, data, api='mobile') => {
  return axios[method](api + (id ? ('/' + id) : ''), data)
}

export const PartnersResource = (method, id, data, api='partners') => {
  console.log('这里执行了6')
  return axios[method](api + (id ? ('/' + id) : ''), data)
}

export const BannerResource=(method, id, data, api='banner')=>{
    return axios[method](api + (id ? ('/' + id) : ''), data)
}

export const RecommendResource=(method, id, data, api='recommend')=>{
    return axios[method](api + (id ? ('/' + id) : ''), data)
}


export const CateBannerResource=(method, id, data, api='category/cateBanner')=>{
    return axios[method](api + (id ? ('/' + id) : ''), data)
}

export const CateArticleResource = (method, id, controller, data, api='category/cateArticle') => {
    return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}

export const DetailResource = (method, id, controller, data, api='detail') => {
    return axios[method](api + (id ? ('/' + id) : '') + (controller ? ('/' + controller) : ''), data)
}