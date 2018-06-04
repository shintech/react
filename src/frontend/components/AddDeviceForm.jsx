const AddDeviceForm = ({ submitForm = f => f }) => {
  let _serial, _model, _manufacturer

  const submit = e => {
    e.preventDefault()

    const obj = {
      serial: _serial.value,
      model: _model.value,
      manufacturer: _manufacturer.value
    }

    submitForm(obj)
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
