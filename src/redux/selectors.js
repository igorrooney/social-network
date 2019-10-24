export const getUsers = state => {
  return state.usersPage.users;
};

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};

export const getTotalCount = state => {
  return state.usersPage.totalCount;
};

export const getPageSize = state => {
  return state.usersPage.pageSize;
};

export const getIsLoading = state => {
  return state.usersPage.isLoading;
};

export const getIsFetching = state => {
  return state.usersPage.isFetching;
};
