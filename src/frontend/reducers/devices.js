const devices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
      return [
        ...state,
        {
          id: action.id,
          serial: action.serial,
          model: action.model,
          manufacturer: action.model
        }
      ]

    case 'FETCH_DEVICES':
      return {
        payload: action.payload,
        error: null,
        loading: true
      }

    case 'FETCH_DEVICES_SUCCESS':
      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_DEVICES_ERROR':
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
