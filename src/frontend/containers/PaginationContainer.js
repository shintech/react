import { connect } from 'react-redux'
import { changePage, fetchDevices, fetchDevicesSuccess, fetchDevicesError } from '../actions'
import Pagination from '../components/Pagination.jsx'

const mapStateToProps = (state) => {
  return {
    pageCount: state.pagination.pageCount,
    pageSize: state.pagination.pageSize,
    currentPage: state.pagination.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (meta, page) => {
      dispatch(changePage(meta, page))
    },

    fetchDevices: (page) => {
      return new Promise(function (resolve, reject) {
        dispatch(fetchDevices(page))
          .then(response => {
            let { payload, meta } = response

            !response.error ? dispatch(fetchDevicesSuccess({payload, meta})) : dispatch(fetchDevicesError(response))
            dispatch(changePage(meta, page))
            resolve(meta)
          })
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
