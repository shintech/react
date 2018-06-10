const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('dispatch', action.type)

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
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        meta: action.meta,
        error: null,
        loading: true
      }

    case 'FETCH_USERS_SUCCESS':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_USERS_ERROR':
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

export default users
