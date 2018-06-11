export default class HomePage extends React.Component {
  componentWillMount () {
    const { changePage } = this.props

    changePage({
      pageSize: null,
      pageCount: null
    })
  }

  render () {
    return (
      <h1>Test</h1>
    )
  }
}
