import App from '../components/App'
import Container from '../components/Container'
// import Article from '../components/Article'
import Category from '../components/Category'
// import Settings from '../components/Settings'
// import MobileApps from '../components/MobileApps'
import NotFound from '../components/NotFound'

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Container
      },
      { path: '/category',
        component: Category
      },
      // { path: '/article/:id',
      //   component: Article
      // },
      // { path: '/settings',
      //   component: Settings
      // },
      // { path: '/apps',
      //   component: MobileApps
      // },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
