import { combineReducers } from 'redux'
import devices from './devices'
import stars from './stars'
import navbar from './navbar'
import modal from './modal'
import users from './users'

export default combineReducers({
  stars,
  devices,
  navbar,
  modal,
  users
})
