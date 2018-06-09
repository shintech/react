import PropTypes from 'prop-types'

const Modal = ({ hidden, modal, template, model }) => {
  if (hidden) return <div className='hidden' />

  if (!template) {
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

  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
          <span className='title'>Device Modal</span>
          <span className='close' onClick={modal}>&times;</span>
        </div>
        <div className='modal-body'>
          <h1>{model.model}</h1>
          <ul>
            <li>Serial: {model.serial}</li>
            <li>Manufacturer: {model.manufacturer}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

export default Modal
