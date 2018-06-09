import { connect } from 'react-redux'
import { fetchDevices, fetchDevicesSuccess, fetchDevicesError, toggleModal } from '../actions'
import DeviceList from '../components/DeviceList.jsx'

const mapStateToProps = (state) => {
  return {
    devices: state.devices
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDevices: () => {
      dispatch(fetchDevices()).then(response => {
        !response.error ? dispatch(fetchDevicesSuccess(response.payload)) : dispatch(fetchDevicesError(response.payload))
      })
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'device', model: model }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList)
