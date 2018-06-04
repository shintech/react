import PropTypes from 'prop-types'

const Device = ({ serial = 'NA', model = '[unavailable]', manufacturer = 'NA' }) =>
  <ul className='device-view'>
    <li className='device-serial'>{ serial }</li>
    <li className='device-manufacturer'>{ manufacturer }</li>
    <li className='device-model'>{ model }</li>
  </ul>

Device.propTypes = {
  serial: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired
}

export default Device
