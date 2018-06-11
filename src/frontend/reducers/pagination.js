const pagination = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      console.log('dispatch', action.type)

      return {
        pageCount: action.meta.pageCount,
        pageSize: action.meta.pageSize,
        currentPage: action.page
      }

    default:
      return state
  }
}

export default pagination
