import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import configStore from './store/index.js'
import AppContainer from './containers/AppContainer'

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
  }
})

render(
  <Router>
    <Provider store={store}>
      <Route path='/' component={AppContainer} />
    </Provider>
  </Router>,

  document.getElementById('container')
)
