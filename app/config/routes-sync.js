import Layout from 'components/Layout'
import Home from 'components/Layout/Body/Home'
import Category from 'components/Layout/Body/Category'
import Detail from 'components/Layout/Body/Detail'
import NotFound from 'components/404/NotFound'

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/category',
        exact: true,
        component: Category
      },
      {
        path: '/detail',
        exact: true,
        component: Detail
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
