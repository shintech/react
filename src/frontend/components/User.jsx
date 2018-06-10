import PropTypes from 'prop-types'

/* eslint-disable */

const User = ({ first_name = 'NA', last_name = '[unavailable]', email = 'NA', message = 'NA', onClick }) =>
  <li className='content-view' onClick={onClick}>
    <span className='user-name'>{ first_name } { last_name }</span>
    <span className='user-email'>{ email }</span>
    <span className='user-message'>{ message }</span>
  </li>

/* eslint-enable */

User.propTypes = {
  first_name: PropTypes.string.isRequired
}

export default User
