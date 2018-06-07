import { connect } from 'react-redux'
import Navbar from './components/Navbar.jsx'
import DeviceListContainer from './containers/DeviceListContainer.jsx'
import StarContainer from './containers/StarContainer.jsx'
import AddDeviceContainer from './containers/AddDeviceContainer.jsx'

require('../../public/less/index.less')
require('babel-polyfill')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      devices: []
    }

    window.onhashchange = (e) => {
      this.setState({
        activeNavTab: window.location.hash
      })
    }
  }

  // removeDevice (id) {
  //   let devices = this.state.devices.filter(device => device.id !== id)

  //   this.setState({ devices })
  // }

  render () {
    return (
      <div className='root'>
        <Navbar active={this.state.activeNavTab} />
        <StarContainer />
        <AddDeviceContainer />
        <DeviceListContainer />
      </div>
    )
  }
}

export default connect()(App)
