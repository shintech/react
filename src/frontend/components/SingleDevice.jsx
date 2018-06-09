import StarContainer from '../containers/StarContainer'

const SingleDevice = ({ device }) =>
  <div>
    <h3>{device.model}</h3>
    <ul>
      <li>Serial: {device.serial}</li>
      <li>Manufacturer: {device.manufacturer}</li>
    </ul>
    <StarContainer />

  </div>

export default SingleDevice
