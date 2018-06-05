import Navbar from './components/Navbar.jsx'
import Article from './components/Article.jsx'
import StarRating from './components/StarRating.jsx'
import AddDeviceForm from './components/AddDeviceForm.jsx'

require('babel-polyfill')
require('../../public/less/index.less')

if (module.hot) module.hot.accept()

export default class App extends React.Component {
  constructor (props) {
    super()

    this.onRate = this.onRate.bind(this)
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

  async componentWillMount () {
    let json

    try {
      this.setState({ loading: true })

      let devices = await fetch('/api/devices')

      json = await devices.json()
    } catch (err) {
      throw new Error(err.message)
    }

    this.setState({
      loading: false,
      devices: json.response,
      activeNavTab: window.location.hash
    })
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

  onRate (starsSelected) {
    this.setState({ starsSelected })
  }

  render () {
    return (
      <div className='root'>
        <Navbar active={this.state.activeNavTab} />
        <StarRating starsSelected={this.state.starsSelected} onRate={this.onRate} />
        <AddDeviceForm onNewDevice={this.newDevice} />
        <Article title='devices' devices={this.state.devices} loading={this.state.loading} />
      </div>
    )
  }
}
