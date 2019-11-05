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
  return state.usersPage.isFetching;
};

export const getIsFetching = state => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = state => {
  return state.usersPage.followingInProgress;
};
export const getIsLoadingProfile = state => {
  return state.profilePage.isLoading;
};



export const getPortion = state => {
  return state.usersPage.portion;
};

export const getEditMode = state => {
  return state.profilePage.editMode;
};

export const getCaptcha = state => {
  return state.auth.captcha;
};
