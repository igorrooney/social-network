const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  messages: [
    {
      id: '1',
      message: 'Hi'
    },
    {
      id: '2',
      message: 'How are you doing?'
    },
    {
      id: '3',
      message: 'Hello!!!'
    }
  ],
  dialogs: [
    {
      id: '1',
      name: 'Igor',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg'
    },
    {
      id: '2',
      name: 'Olga',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-2.jpg'
    },
    {
      id: '3',
      name: 'Maksym',
      photo: 'http://mythemestore.com/friend-finder/images/users/user-8.jpg'
    }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: action.message
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = message => ({
  type: ADD_MESSAGE,
  message
});

export default dialogsReducer;
