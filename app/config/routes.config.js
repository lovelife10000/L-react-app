import * as loadable from "./loadable"

const routes = [
  {
    component: loadable.LoadableLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: loadable.LoadableHome
      },
      {
        path: "/category",
        exact: true,
        component: loadable.LoadableCategory
      },
      {
        path: "/detail",
        exact: true,
        component: loadable.LoadableDetail
      },
      {
        path: "*",
        component: loadable.LoadableNotFound
      }
    ]
  }
]

export default routes
