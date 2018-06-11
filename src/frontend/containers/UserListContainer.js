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
      return new Promise(function (resolve, reject) {
        dispatch(fetchUsers())
          .then(response => {
            let { payload, meta } = response

            !response.error ? dispatch(fetchUsersSuccess({ payload, meta })) : dispatch(fetchUsersError(response))
            resolve(meta)
          })
      })
    },

    changePage: (meta, page) => {
      dispatch(changePage(meta, page))
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'user', model: model }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
