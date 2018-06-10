import PropTypes from 'prop-types'
import AddDeviceContainer from '../containers/AddDeviceContainer'
import SingleDevice from '../components/SingleDevice.jsx'
import SingleUser from '../components/SingleUser.jsx'

const Modal = ({ hidden, modal, template, model }) => {
  if (hidden || !template) return <div className='hidden' />

  let html

  if (template === 'form') html = <AddDeviceContainer />
  if (template === 'device') html = <SingleDevice device={model} />
  if (template === 'user') html = <SingleUser user={model} />

  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
          <span className='title'>Menu</span>
          <span className='close' onClick={modal}>&times;</span>
        </div>
        <div className='modal-body'>
          {html}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  hidden: PropTypes.bool.isRequired
}

export default Modal
