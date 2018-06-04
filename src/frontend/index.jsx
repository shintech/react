import ReactDOM from 'react-dom'

import Navbar from './components/Navbar.jsx'
import Article from './components/Article.jsx'
import AddDeviceForm from './components/AddDeviceForm.jsx'

require('babel-polyfill')
require('../../public/less/index.less')

if (module.hot) module.hot.accept()

class Root extends React.Component {
  constructor () {
    super()

    this.state = {
      devices: []
    }
  }

  async componentDidMount () {
    let json

    try {
      let devices = await fetch('/api/devices')

      json = await devices.json()
    } catch (err) {
      throw new Error(err.message)
    }

    this.setState({
      devices: json.response
    })
  }

  render () {
    return (
      <div className='root'>
        <Navbar />
        <AddDeviceForm submitForm={this.submitForm} />
        <Article title='devices' devices={this.state.devices} />
      </div>
    )
  }

  async submitForm (obj) {
    let json

    try {
      let result = await fetch('/api/devices', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'content-type': 'application/json'
        }
      })

      json = await result.json()
    } catch (err) {
      json = err.message
    }

    console.log(json)
  }
}

ReactDOM.render(<Root />, document.getElementById('container'))
