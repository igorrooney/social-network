import { combineReducers } from 'redux-immer'
import typeToReducer from 'type-to-reducer'
import produce from 'immer'
// ActionTypes
import { types } from 'constants/actionTypes'
// Types
import { 
  PostType, 
  ProfileType 
} from 'types/types'

const initialState = {
  posts: [
    {
      id: 1,
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: 'Hi, how are you?',
      likeCount: 5
    },
    {
      id: 12,
      img: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
      message: "It's my first post",
      likeCount: 1
    }
  ] as Array<PostType>,
  profile: {} as ProfileType | any,
  status: '',
  editMode: false,
  isLoading: true,
  newTextPost: '',
}

const posts = typeToReducer({
  [types.PROFILE_ADD_POST]: (draft, action) => {
    const {
      id, 
      img, 
      post,
    } = action.payload
    const newPost = {
      id,
      img,
      message: post,
      likeCount: 0,
    }
    return [newPost, ...draft]
  },
  [types.PROFILE_DELETE_POST]: (draft, action) => {
    const { postId } = action.payload
    const nextPosts = draft.filter(post => post.id !== postId)
    return nextPosts
  }
}, initialState.posts)

const profile = typeToReducer({
  [types.GET_PROFILE.BASE]: {
    SUCCESS: (draft, action) => {
      return action.payload
    }
  },
  [types.PROFILE_UPLOAD_PHOTO.BASE]: {
    SUCCESS: (draft, action) => {
      const { resultCode, data } = action.payload
      if (resultCode === 0) {
        return {
          ...draft,
          photos: data.photos
        }
      }
    }
  },
  [types.UPDATE_PROFILE.BASE]: {
    SUCCESS: (draft, action) => {
      console.log('action', action)
    }
  }
}, initialState.profile)

const status = typeToReducer({
  [types.PROFILE_GET_STATUS.BASE]: {
    SUCCESS: (draft, action) => {
      const status = action.payload
      return (!!status && !!status.length) ? status : 'no status'
    }
  },
  [types.PROFILE_UPDATE_STATUS.BASE]: {
    SUCCESS: (draft, action) => {
      const { resultCode } = action.payload
      const text = action.meta
      if (resultCode === 0) {
        return text
      }
      return draft
    }
  }
}, initialState.status)

const editMode = typeToReducer({
  [types.PROFILE_SET_EDIT_MODE]: (draft, action) => {
    return !draft
  }
}, initialState.editMode)

const isLoading = typeToReducer({
  [types.GET_PROFILE.BASE]: {
    REQUEST: () => true,
    SUCCESS: () => false,
    FAILURE: () => false,
  },
}, initialState.isLoading)

const newTextPost = typeToReducer({
  [types.PROFILE_ADD_POST]: (draft, action) => {
    return ''
  }
}, initialState.newTextPost)

export type ProfileInitialStateType = typeof initialState 

export default combineReducers(produce, {
  posts,
  profile,
  status,
  editMode,
  isLoading,
  newTextPost,
})
