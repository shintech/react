import Device from './Device.jsx'

class DeviceList extends React.Component {
  componentWillMount () {
    this.props.fetchDevices()
  }

  render () {
    const { payload, loading, error } = this.props.devices

    if (!payload) { return <h3>Loading...</h3> } else if (error) { return <h3>Error...</h3> }

    return (
      <div className='devices'>
        {(loading) ? <h3>Loading...</h3>
          : <ul className='devices-list'>
            {payload.map(device =>
              <Device key={device.id} {...device} />
            )}
          </ul>
        }
      </div>
    )
  }
}

export default DeviceList
