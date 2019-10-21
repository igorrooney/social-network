import { usersAPI } from '../api/social-network-API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_PAGES = 'SET_TOTAL_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_PROFILE = 'SET_PROFILE';
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isLoading: false,
  profile: null,
  isFetching: []
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
        isLoading: action.isLoading
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isLoading
          ? [...state.isFetching, action.userId]
          : [state.isFetching.filter(id => id !== action.userId)]
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
export const setIsLoading = isLoading => ({ type: SET_IS_LOADING, isLoading });
export const setProfile = profile => ({ type: SET_PROFILE, profile });
export const setIsFetching = (isFetching, userId) => ({
  type: IS_FETCHING,
  isFetching,
  userId
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setIsLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCountPages(data.totalCount));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const followUser = id => {
  return dispatch => {
    dispatch(setIsFetching(true, id));
    usersAPI.followUser(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
    });
    dispatch(setIsFetching(false, id));
  };
};

export const unfollowUser = id => {
  return dispatch => {
    dispatch(setIsFetching(true, id));
    usersAPI.unfollowUser(id).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
    });
    dispatch(setIsFetching(false, id));
  };
};

export const getProfile = id => {
  return dispatch => {
    usersAPI.getProfile(id).then(data => {
      dispatch(setProfile(data));
    });
  };
};

export default usersReducer;
