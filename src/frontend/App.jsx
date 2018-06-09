import { connect } from 'react-redux'
import NavbarContainer from './containers/NavbarContainer.js'
import DeviceListContainer from './containers/DeviceListContainer.js'
import ModalContainer from './containers/ModalContainer.js'

require('../../public/less/index.less')
require('babel-polyfill')

class App extends React.Component {
  render () {
    return (
      <div className='root'>
        <NavbarContainer />
        <DeviceListContainer />
        <ModalContainer />
      </div>
    )
  }
}

export default connect()(App)
