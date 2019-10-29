import { usersAPI } from '../api/social-network-API';

const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USERS = '/users/SET_USERS';
const SET_TOTAL_COUNT_PAGES = '/users/SET_TOTAL_COUNT_PAGES';
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE';
const SET_IS_LOADING = '/users/SET_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = '/users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true
            };
          }
          return user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false
            };
          }
          return user;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case SET_TOTAL_COUNT_PAGES:
      return {
        ...state,
        totalCount: action.pages
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalCountPages = pages => ({
  type: SET_TOTAL_COUNT_PAGES,
  pages
});
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setIsLoading = isFetching => ({
  type: SET_IS_LOADING,
  isFetching
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (currentPage, pageSize) => {
  return async dispatch => {
    dispatch(setIsLoading(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountPages(data.totalCount));
    dispatch(setCurrentPage(currentPage));
  };
};

export const followUser = id => {
  return async dispatch => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.followUser(id);
    if (data.resultCode === 0) {
      dispatch(follow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export const unfollowUser = id => {
  return async dispatch => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.unfollowUser(id);
    if (data.resultCode === 0) {
      dispatch(unfollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export default usersReducer;
