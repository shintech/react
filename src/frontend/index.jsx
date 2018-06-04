import ReactDOM from 'react-dom'

import Navbar from './components/Navbar.jsx'
import Article from './components/Article.jsx'

require('../../public/less/index.less')

if (module.hot) module.hot.accept()

class Root extends React.Component {
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
      <div className='root'>
        <Navbar />
        <Article title='devices' devices={this.state.devices} />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('container'))
