import { connect } from 'react-redux'
import Navbar from './components/Navbar.jsx'
import DeviceListContainer from './containers/DeviceListContainer.jsx'
import StarContainer from './containers/StarContainer.jsx'
import AddDeviceForm from './components/AddDeviceForm.jsx'

require('../../public/less/index.less')
require('babel-polyfill')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.newDevice = this.newDevice.bind(this)
    this.removeDevice = this.removeDevice.bind(this)

    this.state = {
      devices: []
    }

    window.onhashchange = (e) => {
      this.setState({
        activeNavTab: window.location.hash
      })
    }
  }

  async newDevice (serial, model, manufacturer) {
    let json

    try {
      let result = await fetch('/api/devices', {
        method: 'POST',
        body: JSON.stringify({ serial, model, manufacturer }),
        headers: {
          'content-type': 'application/json'
        }
      })

      json = await result.json()
    } catch (err) {
      throw new Error(err.message)
    }

    let devices = [
      json,
      ...this.state.devices
    ]

    this.setState({ devices })
  }

  removeDevice (id) {
    let devices = this.state.devices.filter(device => device.id !== id)

    this.setState({ devices })
  }

  render () {
    return (
      <div className='root'>
        <Navbar active={this.state.activeNavTab} />
        <StarContainer />
        <AddDeviceForm onNewDevice={this.newDevice} />
        <DeviceListContainer />
      </div>
    )
  }
}

export default connect()(App)
