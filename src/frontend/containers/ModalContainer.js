import { connect } from 'react-redux'
import Modal from '../components/Modal.jsx'

const mapStateToProps = (state) => {
  return {
    hidden: state.modal.hidden
  }
}

export default connect(mapStateToProps)(Modal)
