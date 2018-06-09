const navbar = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      console.log('dispatch', action.type)

      return {
        active: action.payload
      }

    default:
      return state
  }
}

export default navbar
