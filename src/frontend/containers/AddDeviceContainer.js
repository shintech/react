import { connect } from 'react-redux'
import { addDevice, toggleModal } from '../actions'
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
    },

    modal: () => {
      dispatch(toggleModal({
        template: null,
        model: null
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceForm)
