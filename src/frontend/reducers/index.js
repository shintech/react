import { combineReducers } from 'redux'
import devices from './devices'
import stars from './stars'
import navbar from './navbar'
import modal from './modal'
import users from './users'
import pagination from './pagination'
import files from './files'
export default combineReducers({
  stars,
  devices,
  navbar,
  modal,
  users,
  pagination,
  files
})
