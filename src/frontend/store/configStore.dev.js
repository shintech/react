import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import reducer from '../reducers'

export default function configureStore (initialState) {
  const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

  const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
  }

  const finalCreateStore = compose(
    applyMiddleware(promise, logger, saver),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  const store = finalCreateStore(reducer, (localStorage['redux-store'])
    ? JSON.parse(localStorage['redux-store'])
    : initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
