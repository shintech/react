import PropTypes from 'prop-types'
import Device from './Device.jsx'

const Article = ({ title, devices, loading }) =>
  <article>
    {(loading) ? <h3>Loading...</h3>
      : <div className='devices'>
        {devices.map((item, i) =>
          <Device key={i} {...item} />
        )}
      </div>
    }
  </article>

Article.propTypes = {
  devices: PropTypes.array.isRequired
}

export default Article
