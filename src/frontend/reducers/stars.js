const stars = (state = {}, action) => {
  console.log('dispatch', action.type)

  switch (action.type) {
    case 'CHANGE_RATING':
      return {
        starsSelected: action.payload,
        totalStars: state.totalStars
      }

    default:
      return state
  }
}

export default stars
