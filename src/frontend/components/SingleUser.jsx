const SingleUser = ({ user }) =>
  <div>
    <h3>{user.first_name} {user.last_name}</h3>
    <ul>
      <li>Email: {user.email}</li>
      <li>Message: {user.message}</li>
    </ul>

  </div>

export default SingleUser
