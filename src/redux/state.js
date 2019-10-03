const state = {
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
    ]
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
    ]
  },
  friends: [
    { id: "1", 
      name: "Igor", 
      photo: "http://mythemestore.com/friend-finder/images/users/user-4.jpg", 
      online: false
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
  ]
};

export const addPost = (post) => {
  debugger;
  const newPost = {
    id: 5,
    message: post,
    likeCount: 0
  };

  state.profilePage.posts.push(newPost);
}

export default state;