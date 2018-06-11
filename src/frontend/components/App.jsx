import { Route } from 'react-router-dom'

import NavbarContainer from '../containers/NavbarContainer'
import ModalContainer from '../containers/ModalContainer'
import DeviceListContainer from '../containers/DeviceListContainer'
import UserListContainer from '../containers/UserListContainer'
import HomePageContainer from '../containers/HomePageContainer'
import PaginationContainer from '../containers/PaginationContainer'

const App = ({ pagination }) => {
  return (
    <div>
      <NavbarContainer />
      <Route exact path='/' component={HomePageContainer} />
      <Route exact path='/users' component={UserListContainer} />
      <Route exact path='/devices' component={DeviceListContainer} />
      <PaginationContainer />
      <ModalContainer />
    </div>)
}

export default App
