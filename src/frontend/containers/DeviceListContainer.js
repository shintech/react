import { connect } from 'react-redux'
import { fetchDevices, fetchDevicesSuccess, fetchDevicesError, toggleModal, changePage } from '../actions'
import DeviceList from '../components/DeviceList.jsx'

const mapStateToProps = (state) => {
  return {
    devices: state.devices,
    meta: state.meta
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDevices: () => {
      return new Promise(function (resolve, reject) {
        dispatch(fetchDevices())
          .then(response => {
            let { payload, meta } = response

            !response.error ? dispatch(fetchDevicesSuccess({payload, meta})) : dispatch(fetchDevicesError(response))
            resolve(meta)
          })
      })
    },

    changePage: (meta, page) => {
      dispatch(changePage(meta, page))
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'device', model: model }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList)
