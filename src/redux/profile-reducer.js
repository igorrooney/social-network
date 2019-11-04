import { usersAPI } from '../api/social-network-API';
import { stopSubmit } from 'redux-form';

const ADD_POST = '/profile/ADD-POST';
const SET_PROFILE = '/profile/SET_PROFILE';
const SET_STATUS = '/profile/SET_STATUS';
const DELETE_POST = '/profile/DELETE_POST';
const SET_EDIT_MODE = '/profile/SET_EDIT_MODE';
const UPLOAD_PHOTO_SUCCESS = '/profile/UPLOAD_PHOTO_SUCCESS';

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
  status: null,
  editMode: false
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

    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };

    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      };

    default:
      return state;
  }
};

export const addPost = (post, img) => ({ type: ADD_POST, post, img });

export const deletePost = postId => ({ type: DELETE_POST, postId });

export const setProfile = profile => ({ type: SET_PROFILE, profile });

const setStatus = status => ({ type: SET_STATUS, status });

const uploadPhotoSuccess = photos => ({ type: UPLOAD_PHOTO_SUCCESS, photos });

export const setEditMode = () => ({ type: SET_EDIT_MODE });

export const getProfile = id => {
  return async dispatch => {
    const data = await usersAPI.getProfile(id);
    dispatch(setProfile(data.data));
  };
};

export const getStatus = id => {
  return async dispatch => {
    const data = await usersAPI.getStatus(id);
    dispatch(setStatus(data));
  };
};

export const setNewStatus = text => {
  return async dispatch => {
    const data = await usersAPI.updateStatus(text);
    if (data.resultCode === 0) {
      dispatch(setStatus(text));
    }
  };
};

export const uploadPhoto = photo => {
  return async dispatch => {
    const data = await usersAPI.uploadPhoto(photo);
    if (data.resultCode === 0) {
      dispatch(uploadPhotoSuccess(data.data.photos));
    }
  };
};

const searchRegEx = (text, pattern) => {
  const result = pattern.exec(text)[0].split('->');
  return result;
};

export const updateProfileInfo = profile => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await usersAPI.updateProfile(profile);
    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
      dispatch(setEditMode());
    } else {
      const error = data.messages[0];
      const errorMessage = error.split('(')[0];
      const pattern = /(Contacts->\w+)/g;
      const errorArr = searchRegEx(error, pattern);
      if (errorArr[0] === 'Contacts') {
        const errorField = errorArr[1].toLowerCase();
        const res = {};
        res.contacts = {};
        res.contacts[errorField] = error;
        console.log(res);
        dispatch(
          stopSubmit('profileForm', {
            contacts: {
              [errorField]: errorMessage
            }
          })
        );
      }
      //dispatch(stopSubmit('profileForm', { _error: error }));
    }
    return Promise.reject(data.messages[0]);
  };
};

export default profileReducer;
