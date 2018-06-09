import { combineReducers } from 'redux'
import devices from './devices'
import stars from './stars'
import navbar from './navbar'

export default combineReducers({
  stars,
  devices,
  navbar
})
