import { connect } from 'react-redux'
import HomePage from '../components/HomePage.jsx'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)