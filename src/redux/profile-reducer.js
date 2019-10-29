import { usersAPI } from '../api/social-network-API';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
  profile: null,
  status: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        img: action.img,
        message: action.post,
        likeCount: 0
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newTextPost: ''
      };

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (post, img) => ({
  type: ADD_POST,
  post,
  img
});

export const deletePost = postId => ({ type: DELETE_POST, postId });

export const setProfile = profile => ({ type: SET_PROFILE, profile });

const setStatus = status => ({ type: SET_STATUS, status });

export const getProfile = id => {
  return dispatch => {
    usersAPI.getProfile(id).then(data => {
      dispatch(setProfile(data.data));
    });
  };
};

export const getStatus = id => {
  return dispatch => {
    usersAPI.getStatus(id).then(data => {
      dispatch(setStatus(data));
    });
  };
};

export const setNewStatus = text => {
  return dispatch => {
    usersAPI.updateStatus(text).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(text));
      }
    });
  };
};

export default profileReducer;
