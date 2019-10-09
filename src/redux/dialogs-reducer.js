const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
  messages: [
    {
      id: "1",
      message: "Hi"
    }, {
      id: "2",
      message: "How are you doing?"
    }, {
      id: "3",
      message: "Hello!!!"
    }
  ],
  dialogs: [
    {
      id: "1",
      name: "Igor",
      photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg"
    }, {
      id: "2",
      name: "Olga",
      photo: "http://mythemestore.com/friend-finder/images/users/user-2.jpg"
    }, {
      id: "3",
      name: "Maksym",
      photo: "http://mythemestore.com/friend-finder/images/users/user-8.jpg"
    }
  ],
  newMessageText: 'Write your message'
};

const dialogsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {

    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText
      };
      newState.messages.unshift(newMessage);
      state.newMessageText = '';
      return {...state, newState};

    case UPDATE_MESSAGE_TEXT:
      
      newState.newMessageText = action.text;
      return {...state, ...newState};

    default:
      return state;

  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text});

export default dialogsReducer;