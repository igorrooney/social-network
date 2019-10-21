import { usersAPI } from '../api/social-network-API';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
  posts: [
    {
      id: '1',
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: 'Hi, how are you?',
      likeCount: '5'
    },
    {
      id: '12',
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: "It's my first post",
      likeCount: '1'
    }
  ],
  newTextPost: 'Write your post',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newTextPost,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newTextPost: ''
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newTextPost: action.message
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = text => ({
  type: UPDATE_POST_TEXT,
  message: text
});

const setProfile = profile => ({ type: SET_PROFILE, profile });

export const getProfile = id => {
  return dispatch => {
    usersAPI.getProfile(id).then(data => {
      dispatch(setProfile(data.data));
    });
  };
};

export default profileReducer;
