import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AppContainer from './containers/AppContainer'
import configStore from './store/index.js'

require('../../public/less/index.less')
require('babel-polyfill')

if (module.hot) module.hot.accept()

const store = configStore({
  stars: {
    totalStars: 5,
    starsSelected: 0
  },
  navbar: {
    active: window.location.hash
  },
  modal: {
    hidden: true
  },
  pagination: {
    pageSize: 4,
    pageCount: 0,
    currentPage: 1
  }
})

render(
  <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>,

  document.getElementById('container')
)
