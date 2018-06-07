import { combineReducers } from 'redux'
import devices from './devices'
import stars from './stars'

export default combineReducers({
  stars,
  devices
})
