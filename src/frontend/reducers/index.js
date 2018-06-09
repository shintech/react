import { combineReducers } from 'redux'
import devices from './devices'
import stars from './stars'
import navbar from './navbar'
import modal from './modal'

export default combineReducers({
  stars,
  devices,
  navbar,
  modal
})
