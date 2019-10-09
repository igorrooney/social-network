const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
  posts: [
    {
      id: "1",
      img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
      message: "Hi, how are you?",
      likeCount: "5"
    }, {
      id: "12",
      img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
      message: "It's my first post",
      likeCount: "1"
    }
  ],
  newTextPost: 'Write your post'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newTextPost,
        likeCount: 0
      };
      state.posts.unshift(newPost);
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
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, message: text});

export default profileReducer;