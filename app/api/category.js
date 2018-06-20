import request from './request'


export const getCategories = function () {
  return request['get']('getCategories')
};

