import { connect } from 'react-redux'
import { fetchDevices, fetchDevicesSuccess, fetchDevicesError } from '../actions'
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList)
