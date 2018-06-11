const devices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      console.log('dispatch', action.type)

      const retval = [
        {
          id: action.json.id,
          serial: action.json.serial,
          model: action.json.model,
          manufacturer: action.json.manufacturer
        },
        ...action.devices
      ]

      return {
        payload: retval,
        loading: false
      }

    case 'FETCH_DEVICES':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        meta: action.meta,
        error: null,
        loading: true
      }

    case 'FETCH_DEVICES_SUCCESS':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        meta: action.meta,
        loading: false,
        error: null
      }

    case 'FETCH_DEVICES_ERROR':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default devices
