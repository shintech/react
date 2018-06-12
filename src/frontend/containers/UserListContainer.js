import { connect } from 'react-redux'
import { fetchUsers, fetchUsersSuccess, fetchUsersError, toggleModal, changePage } from '../actions'
import UserList from '../components/UserList.jsx'

const mapStateToProps = (state) => {
  return {
    users: state.users,
    meta: state.meta
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
        .then(response => {
          let { payload, meta } = response
          change(dispatch, meta, 1)

          !response.error ? dispatch(fetchUsersSuccess({ payload, meta })) : dispatch(fetchUsersError(response))
        })
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'user', model: model }))
    }
  }
}

function change (dispatch, meta, page) {
  dispatch(changePage(meta, page))
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
