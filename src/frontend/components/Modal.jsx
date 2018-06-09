import PropTypes from 'prop-types'

const Modal = ({ hidden }) =>
  <div className='modal'>
    {(hidden) ? <div className='hidden' />
      : <div className='modal'>
      Modal
      </div>
    }
  </div>

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

export default Modal
