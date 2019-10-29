import { addMessage } from './dialogs-reducer';
import dialogsReducer from './dialogs-reducer';

const state = {
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

it('after adding post length of the messages should be increment', () => {
  const action = addMessage('test message');
  const newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(4);
});

it('after adding message text should be correct', () => {
  const action = addMessage('test message');
  const newState = dialogsReducer(state, action);
  expect(newState.messages[3].message).toBe('test message');
});
