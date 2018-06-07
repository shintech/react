import { connect } from 'react-redux'
import { changeRating } from '../actions'
import StarRating from '../components/StarRating.jsx'

/* eslint-disable */
const mapStateToProps = (state) => {
  return {
    starsSelected: state.stars.starsSelected,
    totalStars: state.stars.totalStars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickRating: (starsSelected) => {
      dispatch(changeRating(starsSelected))
    }
  }
}

/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(StarRating)
