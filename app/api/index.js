import {UserResource,AuthResource,ArticleResource,TagResource,MobileResource,CommentResource,PartnersResource,BannerResource,RecommendResource,CateBannerResource,CateArticleResource,DetailResource} from './resources'

export default {
  localLogin: function (data) {
    return AuthResource('post', 'local', data)
  },
  getSnsLogins: function () {
    return UserResource('get', 'snsLogins')
  },
  getMe: function (data) {
    return UserResource('get', 'me', data)
  },
  mdUser: function (data) {
    return UserResource('put', 'mdUser', data)
  },
  getTagList:function () {
    return TagResource('get','getFrontTagList')
  },
  getApps:function () {
    return MobileResource('get','getApps')
  },
  getPartners:function () {
    console.log('这里执行了3')
    return PartnersResource('get','getPartners')
  },
  //article
  getIndexImage:function () {
    return ArticleResource('get', 'getIndexImage')
  },


  getArticleList:function (options) {
    return ArticleResource('get', null, null, {params:options})
  },
    addArticleList:(num)=>{
    ArticleResource('get',null,null,{params:num})
    },



  getArticleDetaile:function (id) {
    return ArticleResource('get', id, 'getFrontArticle')
  },
  toggleLike:function (id) {
    return ArticleResource('put',id,'toggleLike')
  },
  getPrenext:function (id,options) {
    return ArticleResource('get',id,'getPrenext', {params:options})
  },
  //comment
  getCommentList:function (id) {
    return CommentResource('get',id,'getFrontCommentList')
  },
  addNewComment:function (data) {
    return CommentResource('post', 'addNewComment', null, data)
  },
  addNewReply: function (id,data) {
    return CommentResource('post', id, 'addNewReply', data)
  },
  delComment:function (id) {
    return CommentResource('delete', id)
  },
  delReply: function (id,data) {
    return CommentResource('delete', id, 'delReply', data)
  },

  getBannerData:function () {
      return BannerResource('get')
  },
    getRecommendData:function () {
        return RecommendResource('get')
    },
    getCateBannerData:function () {
        return CateBannerResource('get')
    },
    getCateArticleList:function (options) {
        return CateArticleResource('get', null, null, {params:options})
    },

    getDetail:function (options) {
        return DetailResource('get', null, null, {params:options})
    },



}