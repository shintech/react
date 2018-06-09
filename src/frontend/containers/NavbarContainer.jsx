import { connect } from 'react-redux'
import { changeActiveTab, showModal } from '../actions'
import Navbar from '../components/Navbar.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.navbar.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveTab: (activeTab) => {
      dispatch(changeActiveTab(activeTab))
    },
    modal: () => {
      dispatch(showModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
