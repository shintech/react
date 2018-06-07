import { connect } from 'react-redux'
import { addDevice } from '../actions'
import AddDeviceForm from '../components/AddDeviceForm.jsx'

const mapStateToProps = (state) => {
  return {
    devices: state.devices
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewDevice: (attrs, devices) => {
      dispatch(addDevice(attrs, devices))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceForm)
