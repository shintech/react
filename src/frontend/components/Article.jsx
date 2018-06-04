import PropTypes from 'prop-types'
import Device from './Device.jsx'

const Article = ({ title, devices }) =>
  <article>
    <div className='devices'>
      {devices.map((item, i) =>
        <Device key={i} {...item} />
      )}
    </div>
  </article>

Article.propTypes = {
  devices: PropTypes.array.isRequired
}

export default Article
