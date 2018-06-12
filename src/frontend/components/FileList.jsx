import File from './File.jsx'

class FileList extends React.Component {
  componentWillMount () {
    let { fetchFiles } = this.props

    fetchFiles()
  }

  render () {
    const { payload, loading, error } = this.props.files

    if (!payload) { return <h3>Loading...</h3> } else if (error) { return <h3>Error...</h3> }

    return (
      <div className='files'>
        {(loading) ? <h3>Loading...</h3>
          : <ul className='content-list'>

            {payload.map((file, i) =>

              <File key={i} file={file} />
            )}
          </ul>
        }
      </div>
    )
  }
}

export default FileList
