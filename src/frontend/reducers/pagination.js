const pagination = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      if (action.meta) {
        return {
          pageCount: action.meta.pageCount,
          pageSize: action.meta.pageSize,
          currentPage: action.page
        }
      } else {
        return state
      }

    default:
      return state
  }
}

export default pagination
