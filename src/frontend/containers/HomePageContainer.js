import { connect } from 'react-redux'
import { changePage } from '../actions'
import HomePage from '../components/HomePage.jsx'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage (meta) {
      dispatch(changePage(meta))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
