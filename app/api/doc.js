import request from "./request"

export const getArticleList = function (options) {
  return request["get"]("article", { params: options })
}


export const localLogin = function (data) {
  return request["post"]("auth/local", data)
}

export const addArticleList = function (num) {
  return request["get"]("article", { params: num })
}


export const getArticleDetail = function (num) {
  return request["get"]("article", { params: num })
}

export const getBannerData = function () {
  return request["get"]("banner")
}

export const getRecommendData = function () {
  return request["get"]("recommend")
}


export const getCateBannerData = function () {
  return request["get"]("category/cateBanner")
}

export const getCateArticleList = function () {
  return request["get"]("category/cateArticle")
}

export const getDetail = function () {
  return request["get"]("detail")
}







