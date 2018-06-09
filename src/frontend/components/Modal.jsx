import PropTypes from 'prop-types'
import AddDeviceContainer from '../containers/AddDeviceContainer'
import StarContainer from '../containers/StarContainer'

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

  if (template === 'form') {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <div className='modal-header'>
            <span className='title'>Menu</span>
            <span className='close' onClick={modal}>&times;</span>
          </div>
          <div className='modal-body'>
            <AddDeviceContainer />
          </div>
        </div>
      </div>
    )
  }

  if (template === 'device') {
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

              <li><StarContainer /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

export default Modal
