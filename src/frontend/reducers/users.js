const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      const retval = [
        {
          id: action.json.id,
          serial: action.json.serial,
          model: action.json.model,
          manufacturer: action.json.manufacturer
        },
        ...action.users
      ]

      return {
        payload: retval,
        loading: false
      }

    case 'FETCH_USERS':
      return {
        payload: action.payload,
        meta: action.meta,
        error: null,
        loading: true
      }

    case 'FETCH_USERS_SUCCESS':
      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_USERS_ERROR':
      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default users
