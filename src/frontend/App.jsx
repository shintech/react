import { connect } from 'react-redux'
import NavbarContainer from './containers/NavbarContainer.jsx'
import DeviceListContainer from './containers/DeviceListContainer.jsx'
import StarContainer from './containers/StarContainer.jsx'
import AddDeviceContainer from './containers/AddDeviceContainer.jsx'
import ModalContainer from './containers/ModalContainer.jsx'

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
