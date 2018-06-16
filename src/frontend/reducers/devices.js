const devices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DEVICE':
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
      return {
        payload: action.payload,
        meta: action.meta,
        error: null,
        loading: true,
        currentPage: state.currentPage
      }

    case 'FETCH_DEVICES_SUCCESS':
      return {
        payload: action.payload,
        meta: action.meta,
        loading: false,
        error: null,
        currentPage: state.currentPage
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
