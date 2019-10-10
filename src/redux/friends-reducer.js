const initialState = [
  {
    id: '1',
    name: 'Igor',
    photo: 'http://mythemestore.com/friend-finder/images/users/user-4.jpg',
    online: true
  },
  {
    id: '2',
    name: 'Olga',
    photo: 'http://mythemestore.com/friend-finder/images/users/user-2.jpg',
    online: true
  },
  {
    id: '3',
    name: 'Maksym',
    photo: 'http://mythemestore.com/friend-finder/images/users/user-8.jpg',
    online: false
  }
];
const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
