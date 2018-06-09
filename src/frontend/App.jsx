import { connect } from 'react-redux'
import NavbarContainer from './containers/NavbarContainer.js'
import DeviceListContainer from './containers/DeviceListContainer.js'
import StarContainer from './containers/StarContainer.js'
import AddDeviceContainer from './containers/AddDeviceContainer.js'
import ModalContainer from './containers/ModalContainer.js'

require('../../public/less/index.less')
require('babel-polyfill')

class App extends React.Component {
  // removeDevice (id) {
  //   let devices = this.state.devices.filter(device => device.id !== id)

  //   this.setState({ devices })
  // }

  render () {
    return (
      <div className='root'>
        <NavbarContainer />
        <StarContainer />
        <AddDeviceContainer />
        <DeviceListContainer />
        <ModalContainer />
      </div>
    )
  }
}

export default connect()(App)
