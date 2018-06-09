import PropTypes from 'prop-types'

const Modal = ({ hidden, modal }) => {
  if (hidden) return <div className='hidden' />

  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
          <span className='title'>Menu</span>
          <span className='close' onClick={modal}>&times;</span>
        </div>
        <div className='modal-body'>
          <h1>Test</h1>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

export default Modal
