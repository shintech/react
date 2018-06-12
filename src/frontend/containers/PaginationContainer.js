import { connect } from 'react-redux'
import { changePage, fetchDevices, fetchDevicesSuccess, fetchDevicesError, fetchUsers, fetchUsersSuccess, fetchUsersError } from '../actions'
import Pagination from '../components/Pagination.jsx'

const mapStateToProps = (state, props) => {
  return {
    ownType: props.type,
    pageCount: state.pagination.pageCount,
    pageSize: state.pagination.pageSize,
    currentPage: state.pagination.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDevices: (page) => {
      dispatch(fetchDevices(page))
        .then(response => {
          let { payload, meta } = response
          dispatch(changePage(meta, page))

          !response.error ? dispatch(fetchDevicesSuccess({payload, meta})) : dispatch(fetchDevicesError(response))
        })
    },

    fetchUsers: (page) => {
      dispatch(fetchUsers(page))
        .then(response => {
          let { payload, meta } = response
          dispatch(changePage(meta, page))

          !response.error ? dispatch(fetchUsersSuccess({payload, meta})) : dispatch(fetchUsersError(response))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
