const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText
      };
      state
        .messages
        .unshift(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;

    default:
      return state;

  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text});

export default dialogsReducer;