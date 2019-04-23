import React from "react"
import Loadable from "react-loadable"


const Loading = (props) => (<div>Loading...</div>)


export const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "components/Layout/Body/Home"),
  loading: Loading,
})

export const LoadableLayout = Loadable({
  loader: () => import(/* webpackChunkName: "layout" */ "components/Layout"),
  loading: Loading,
})

export const LoadableCategory = Loadable({
  loader: () => import(/* webpackChunkName: "category" */ "components/Layout/Body/Category"),
  loading: Loading,
})
export const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notFound" */ "components/404/NotFound"),
  loading: Loading,
})

export const LoadableDetail = Loadable({
  loader: () => import(/* webpackChunkName: "detail" */ "components/Layout/Body/Detail"),
  loading: Loading,
})



