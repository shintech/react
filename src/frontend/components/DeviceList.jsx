import PropTypes from 'prop-types'
import Device from './Device.jsx'

const DeviceList = ({ devices, loading }) =>
  <div className='devices'>
    {(loading) ? <h3>Loading...</h3>
      : <ul className='devices-list'>
        {devices.map(device =>
          <Device key={device.id} {...device} />
        )}
      </ul>
    }
  </div>

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      serial: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired
    })
  )
}

export default DeviceList
