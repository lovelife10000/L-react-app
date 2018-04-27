import React from 'react'
import { render } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../app/store/configureStore'
import createDevTools from './createDevtools'
import routes from '../app/config/routes.config'

import 'antd/dist/antd.less'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../app/assets/styles/reset.css'
import '../app/assets/styles/base.less'

const history = createHistory()
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,history)
createDevTools(store)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)