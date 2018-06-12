import { connect } from 'react-redux'
import { fetchFiles, fetchFilesSuccess, fetchFilesError, toggleModal, changePage } from '../actions'
import FileList from '../components/FileList.jsx'

const mapStateToProps = (state) => {
  return {
    files: state.files
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFiles: () => {
      dispatch(fetchFiles())
        .then(response => {
          let { payload, meta } = response
          change(dispatch, meta, 1)

          !response.error ? dispatch(fetchFilesSuccess({payload, meta})) : dispatch(fetchFilesError(response))
        })
    },

    modal: (model) => {
      dispatch(toggleModal({ template: 'file', model: model }))
    }
  }
}

function change (dispatch, meta, page) {
  dispatch(changePage(meta, page))
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)
