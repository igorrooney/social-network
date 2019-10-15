const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_PAGES = 'SET_TOTAL_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isLoading: false
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

export default usersReducer;
