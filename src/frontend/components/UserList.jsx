import User from './User.jsx'
import PaginationContainer from '../containers/PaginationContainer'

class UserList extends React.Component {
  componentWillMount () {
    let { fetchUsers } = this.props

    fetchUsers()
  }

  render () {
    const { payload, loading, error } = this.props.users
    const { modal } = this.props

    if (!payload) { return <h3>Loading...</h3> } else if (error) { return <h3>Error...</h3> }
    return (
      <div className='users'>
        {(loading) ? <h3>Loading...</h3>
          : <ul className='content-list'>
            {payload.map(user =>
              <User onClick={() => { modal(user) }} key={user.id} {...user} />
            )}
          </ul>
        }

        <PaginationContainer type='users' />
      </div>
    )
  }
}

export default UserList
