export default ({ id, serial, model, manufacturer }) =>
  <ul className='device-view'>
    <li className='device-serial'>{ serial }</li>
    <li className='device-manufacturer'>{ manufacturer }</li>
    <li className='device-model'>{ model }</li>
  </ul>
