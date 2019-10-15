const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_PAGES = 'SET_TOTAL_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1
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

    default:
      return state;
  }
};

export const followActionCreator = userId => ({ type: FOLLOW, userId });
export const unFollowActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const setTotalCountPagesActionCreator = pages => ({
  type: SET_TOTAL_COUNT_PAGES,
  pages
});
export const setCurrentPageActionCreator = page => ({
  type: SET_CURRENT_PAGE,
  page
});

export default usersReducer;
