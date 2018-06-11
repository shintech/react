import Device from './Device.jsx'

class DeviceList extends React.Component {
  componentWillMount () {
    let { changePage, fetchDevices } = this.props

    fetchDevices()
      .then(function (meta) {
        changePage(meta, 1)
      })
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
      </div>
    )
  }
}

export default DeviceList
