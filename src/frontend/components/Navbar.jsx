export default class Navbar extends React.Component {
  render () {
    const { changeActiveTab, active } = this.props

    return (
      <nav>

        <li onClick={() => { changeActiveTab('#/') }}><a className={active === '#/' || active === '' ? 'active' : null} href='#/'>home</a></li>

        <li onClick={() => { changeActiveTab('#/users') }}><a className={active === '#/users' ? 'active' : null} href='#/users'>users</a></li>

        <li onClick={() => { changeActiveTab('#/devices') }}><a className={active === '#/devices' ? 'active' : null} href='#/devices'>devices</a></li>

        <div className='dropdown'>
          <button className='dropbtn'>actions &middot;</button>
          <div className='dropdown-content'>
            <a id='create-new'>Create New</a>
            <a id='login' href='#/login'>Login</a>
            <a id='logout'>Logout</a>
          </div>
        </div>
      </nav>
    )
  }
}
