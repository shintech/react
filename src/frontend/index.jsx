import { render } from 'react-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import configStore from './store/index.js'

if (module.hot) module.hot.accept()

const store = configStore({
  stars: {
    totalStars: 5,
    starsSelected: 0
  },
  navbar: {
    active: window.location.hash
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('container')
)
