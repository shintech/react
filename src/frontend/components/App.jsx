import NavbarContainer from '../containers/NavbarContainer.js'
import DeviceListContainer from '../containers/DeviceListContainer.js'
import ModalContainer from '../containers/ModalContainer.js'

const App = () =>
  <div className='root'>
    <NavbarContainer />
    <DeviceListContainer />
    <ModalContainer />
  </div>

export default App
