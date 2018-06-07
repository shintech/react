import PropTypes from 'prop-types'
import Star from './Star.jsx'

class StarRating extends React.Component {
  render () {
    const { starsSelected, clickRating, totalStars } = this.props

    return (
      <div className='star-rating'>
        {[...Array(totalStars)].map((n, i) =>
          <Star key={i} selected={i < starsSelected} onClick={() => clickRating(i + 1)} />
        )}
      </div>
    )
  }
}

StarRating.propTypes = {
  starsSelected: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  clickRating: PropTypes.func.isRequired
}

export default StarRating
