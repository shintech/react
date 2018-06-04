import ReactDOM from 'react-dom'

import Navbar from './components/Navbar.jsx'
import Article from './components/Article.jsx'

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
        <Article title='devices' devices={this.state.devices} />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('container'))
