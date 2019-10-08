const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newTextPost,
        likeCount: 0
      };
      state
        .posts
        .unshift(newPost);
      state.newTextPost = '';
      return state;

    case UPDATE_POST_TEXT:
      state.newTextPost = action.message;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, message: text});

export default profileReducer;