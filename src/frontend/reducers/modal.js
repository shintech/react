const modal = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      console.log('dispatch', action.type)
      let hidden = !state.hidden

      return {
        hidden: hidden
      }

    default:
      return state
  }
}

export default modal
