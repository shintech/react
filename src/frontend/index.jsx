import React from 'react'
import ReactDOM from 'react-dom'
import Device from './components/Device.jsx'

require('../../public/less/index.less')

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
  <Container title='Success' />,
  document.getElementById('container')
)
