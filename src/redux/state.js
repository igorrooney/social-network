// const state = {
//   profilePage: {
//     posts: [
//       {id: "1",
//       img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
//       message: "Hi, how are you?",
//       likeCount: "5"},
//       {id: "12",
//       img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
//       message: "It's my first post",
//       likeCount: "1"}
//     ],
//     newTextPost: 'Write your post'
//   },
//   messagesPage: {
//     messages: [
//       {id: "1", message: "Hi"},
//       {id: "2", message: "How are you doing?"},
//       {id: "3", message: "Hello!!!"}
//     ],
//     dialogs: [
//       {id: "1", name: "Igor", photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg"},
//       {id: "2", name: "Olga", photo: "http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
//       {id: "3", name: "Maksym", photo: "http://mythemestore.com/friend-finder/images/users/user-8.jpg"}
//     ],
//     newMessageText: 'Write your message'
//   },
//   friends: [
//     { id: "1", 
//       name: "Igor", 
//       photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg", 
//       online: true
//     },
//     {
//       id: "2", 
//       name: "Olga", 
//       photo: "http://mythemestore.com/friend-finder/images/users/user-2.jpg",
//       online: true
//     },
//     {
//       id: "3", 
//       name: "Maksym", 
//       photo: "http://mythemestore.com/friend-finder/images/users/user-8.jpg",
//       online: false
//     }
//   ]
// };

// export const addPost = () => {
//   const newPost = {
//     id: 5,
//     message: state.profilePage.newTextPost,
//     likeCount: 0
//   };

//   state.profilePage.posts.unshift(newPost);
//   state.profilePage.newTextPost = '';
//   rerender(state);
// }

// export const updatePostText = (text) => {
//   state.profilePage.newTextPost = text;
//   rerender(state);
// }

// export const updateMessageText = (text) => {
//   state.messagesPage.newMessageText = text;
//   rerender(state);
// }

// export const addMessage = () => {
//   const newMessage = {
//     id: "4", 
//     message: state.messagesPage.newMessageText
//   };
//   state.messagesPage.messages.unshift(newMessage);
//   state.messagesPage.newMessageText = '';
//   rerender(state);
// }

// export const subscribe = (observer) => {
//   rerender = observer;
// }



let store = {
  _state: {
    profilePage: {
      posts: [
        {id: "1",
        img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
        message: "Hi, how are you?",
        likeCount: "5"},
        {id: "12",
        img: "https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg",
        message: "It's my first post",
        likeCount: "1"}
      ],
      newTextPost: 'Write your post'
    },
    messagesPage: {
      messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you doing?"},
        {id: "3", message: "Hello!!!"}
      ],
      dialogs: [
        {id: "1", name: "Igor", photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg"},
        {id: "2", name: "Olga", photo: "http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
        {id: "3", name: "Maksym", photo: "http://mythemestore.com/friend-finder/images/users/user-8.jpg"}
      ],
      newMessageText: 'Write your message'
    },
    friends: [
      { id: "1", 
        name: "Igor", 
        photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg", 
        online: true
      },
      {
        id: "2", 
        name: "Olga", 
        photo: "http://mythemestore.com/friend-finder/images/users/user-2.jpg",
        online: true
      },
      {
        id: "3", 
        name: "Maksym", 
        photo: "http://mythemestore.com/friend-finder/images/users/user-8.jpg",
        online: false
      }
    ]},

  _subscriber() {
    console.log('no subscribers (observers)');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerender = observer;
  },

  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newTextPost,
      likeCount: 0
    };
    this._state.profilePage.posts.unshift(newPost);
    this._state.profilePage.newTextPost = '';
    this._rerender(this._state);
  },

  updatePostText(message) {
    this._state.profilePage.newTextPost = message;
    this._rerender(this._state);
  },

  updateMessageText(text) {
    this._state.messagesPage.newMessageText = text;
    this._rerender(this._state);
  },

  addMessage() {
    const newMessage = {
      id: "4", 
      message: this._state.messagesPage.newMessageText
    };
    this._state.messagesPage.messages.unshift(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._rerender(this._state);
  },

  _rerender() {
    console.log('State is changed');
  }
};





export default store;