import Layout from '../components/Layout'
import Category from '../components/Body/Category'
import NotFound from '../components/404/NotFound'
import Home from '../components/Body/Home'

const routes = [
  { component: Layout,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/category',
        exact: true,
        component: Category
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
