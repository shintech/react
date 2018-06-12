import PropTypes from 'prop-types'

const File = (props) => {
  const {file} = props

  return (
    <li className='content-view'>
      {file}
      <audio controls>
        <source src={`/api/files/${file}`} type='audio/wav' />
      Your browser does not support the audio element.
      </audio>

    </li>
  )
}

File.propTypes = {
  file: PropTypes.string.isRequired
}

export default File
