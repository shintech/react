import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import Modal from '../components/Modal.jsx'

const mapStateToProps = (state) => {
  return {
    hidden: state.modal.hidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modal: () => {
      dispatch(toggleModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
