import React from 'react'

export default ({ active }) =>
  <nav>
    <li><a className='nav-index' href='#/'>home</a></li>
    <li><a className='nav-users' href='#/users'>users</a></li>
    <li><a className='nav-devices' href='#/devices'>devices</a></li>

    <div className='dropdown'>
      <button className='dropbtn'>actions &middot;</button>
      <div className='dropdown-content'>
        <a id='create-new'>Create New</a>
        <a id='login' href='#/login'>Login</a>
        <a id='logout'>Logout</a>
      </div>
    </div>
  </nav>
