import { render } from 'react-dom'
import App from './app.jsx'
import { Provider } from 'react-redux'
import configStore from './store/index.js'

if (module.hot) module.hot.accept()

const store = configStore({
  stars: {
    totalStars: 5,
    starsSelected: 0
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('container')
)
