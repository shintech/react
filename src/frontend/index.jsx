import React from 'react'
import ReactDOM from 'react-dom'

const El = ({ title }) =>
  pug`
    h1= title
  `

ReactDOM.render(
  <El title='Success' />,
  document.getElementById('react-container')
)
