const files = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FILES':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        error: null,
        loading: true
      }

    case 'FETCH_FILES_SUCCESS':
      console.log('dispatch', action.type)

      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_FILES_ERROR':
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

export default files
