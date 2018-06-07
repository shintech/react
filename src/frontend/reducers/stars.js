const stars = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_RATING':
      console.log('dispatch', action.type)

      return {
        starsSelected: action.payload,
        totalStars: state.totalStars
      }

    default:
      return state
  }
}

export default stars
