import profileReducer, { actions } from './profile-reducer'

const state = {
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
  ],
  profile: null,
  status: '',
  editMode: false,
  isLoading: true,
  newTextPost: '',
};

it('after adding post length of the posts should be increment', () => {
  const action = actions.addPost('test message', 'img', 10);
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3);
});

it('after adding post message should be correct', () => {
  const action = actions.addPost('test message', 'img', 11);
  const newState = profileReducer(state, action);
  expect(newState.posts[0].message).toBe('test message');
});

it('after adding post image should be correct', () => {
  const action = actions.addPost('test message', 'img', 12);
  const newState = profileReducer(state, action);
  expect(newState.posts[0].img).toBe('img');
});

it('after adding post likesCount should be correct', () => {
  const action = actions.addPost('test message', 'img', 13);
  const newState = profileReducer(state, action);
  expect(newState.posts[0].likeCount).toBe(0);
});

/* it('after setting profile it should be exist', () => {
  const action = actions.setProfile();
  const newState = profileReducer(state, action);
  expect(newState.profile).toBe('profile');
}); */

it('after deleting post length of the posts should be decrement', () => {
  const action = actions.deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});
