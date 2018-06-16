const files = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FILES':
      return {
        payload: action.payload,
        error: null,
        loading: true
      }

    case 'FETCH_FILES_SUCCESS':
      return {
        payload: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_FILES_ERROR':
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
