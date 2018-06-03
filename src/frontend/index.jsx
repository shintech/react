import React from 'react'
import ReactDOM from 'react-dom'
import Device from './components/Device.jsx'
import Navbar from './components/Navbar.jsx'

require('../../public/less/index.less')

if (module.hot) module.hot.accept()

class Container extends React.Component {
  constructor () {
    super()
    this.state = {
      devices: []
    }
  }

  componentDidMount () {
    return fetch('/api/devices')
      .then(response => response.json())
      .then(json => {
        this.setState({
          devices: json.response
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.devices.map((item, i) =>
          <Device key={i} {...item} />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <div className='root'>
    <Navbar />
    <Container title='Success' />
  </div>,

  document.getElementById('container')
)
