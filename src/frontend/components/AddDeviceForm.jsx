const AddDeviceForm = (props) => {
  let _serial, _model, _manufacturer
  const { createNewDevice, devices } = props

  const submit = e => {
    e.preventDefault()

    let serial = _serial.value
    let model = _model.value
    let manufacturer = _manufacturer.value

    createNewDevice({ serial, model, manufacturer }, devices.payload)
  }

  /* eslint-disable */

  return (
    <form onSubmit={submit}>
      <input ref={input => _serial = input} type='text' placeholder='Serial' required />
      <input ref={input => _model = input} type='text' placeholder='Model' required />
      <input ref={input => _manufacturer = input} type='text' placeholder='Manufacturer' required />
      <button>Add</button>
    </form>
  )

  /* eslint-enable */
}
export default AddDeviceForm
