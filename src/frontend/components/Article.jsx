import Device from './Device.jsx'

export default ({ title, devices }) =>
  <article>
    <div className='devices'>
      {devices.map((item, i) =>
        <Device key={i} {...item} />
      )}
    </div>
  </article>
