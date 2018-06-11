import PropTypes from 'prop-types'

const Pagination = ({ currentPage, pageCount, pageSize, changePage, fetchDevices }) => {
  return (
    <div className='pagination'>
      {(pageCount > 0)
        ? <ul>
          {(currentPage > 1) ? <li><button className='button' onClick={e => {
            e.preventDefault()
            fetchDevices(currentPage - 1)
          }}>Previous Page</button></li>

            : <div className='hidden' />
          }

          <li className='button'>{currentPage}</li>

          {(currentPage < pageCount) ? <li><button className='button' onClick={e => {
            e.preventDefault()
            fetchDevices(currentPage + 1)
          }}>Next Page</button></li>

            : <div className='hidden' />
          }
        </ul>

        : <div className='hidden' />}
    </div>
  )
}

Pagination.propTypes = {
  pageSize: PropTypes.number,
  pageCount: PropTypes.number
}

export default Pagination
