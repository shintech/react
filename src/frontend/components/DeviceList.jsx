import Device from './Device.jsx'
import PaginationContainer from '../containers/PaginationContainer'

class DeviceList extends React.Component {
  componentWillMount () {
    let { fetchDevices } = this.props

    fetchDevices()
  }

  render () {
    const { payload, loading, error } = this.props.devices
    const { modal } = this.props

    if (!payload) { return <h3>Loading...</h3> } else if (error) { return <h3>Error...</h3> }
    return (
      <div className='devices'>
        {(loading) ? <h3>Loading...</h3>
          : <ul className='content-list'>
            {payload.map(device =>
              <Device onClick={() => { modal(device) }} key={device.id} {...device} />
            )}
          </ul>
        }

        <PaginationContainer type='devices' />
      </div>
    )
  }
}

export default DeviceList
