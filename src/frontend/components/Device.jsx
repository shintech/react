import React from 'react'

export default ({ id, serial, model, manufacturer }) =>
  <ul className='device'>
    <li>ID: { id }</li>
    <li>Model: { model }</li>
    <li>Manufacturer: { manufacturer }</li>
    <li>Serial Number: { serial }</li>
  </ul>
