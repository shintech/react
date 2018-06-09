import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import Modal from '../components/Modal.jsx'

const mapStateToProps = (state) => {
  return {
    hidden: state.modal.hidden,
    template: state.modal.template,
    model: state.modal.model
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modal: (props) => {
      dispatch(toggleModal(props))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
