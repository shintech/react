import { connect } from 'react-redux'
import { fetchUsers, fetchUsersSuccess, fetchUsersError, toggleModal } from '../actions'
import UserList from '../components/UserList.jsx'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers()).then(response => {
        !response.error ? dispatch(fetchUsersSuccess(response.payload)) : dispatch(fetchUsersError(response.payload))
      })
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'user', model: model }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
