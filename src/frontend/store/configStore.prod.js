import { createStore, applyMiddleware, compose } from 'redux' // eslint-disable-line
import rootReducer from '../reducers'
import promise from 'redux-promise'

const enhancer = applyMiddleware(promise)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
