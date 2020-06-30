import usersReducer, { actions } from './users-reducer'

const state = {
  users: [
    {
      name: 'VimbaVimba',
      id: 5024,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'Murad',
      id: 5023,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: true
    },
    {
      name: 'alex1',
      id: 5022,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: true
    },
    {
      name: 'alexj1055',
      id: 5021,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: true
    },
    {
      name: 'Avocato',
      id: 5020,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'apollo',
      id: 5019,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'maqq1e',
      id: 5018,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'alexmanwell',
      id: 5017,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'ronni1500',
      id: 5016,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    },
    {
      name: 'andrey_rafalsky',
      id: 5015,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: '',
      followed: false
    }
  ],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  portion: 1,
};

it('after follow user followed should be correct', () => {
  const action = actions.follow(5024);
  const newState = usersReducer(state, action);
  expect(newState.users[0].followed).toBe(true);
});

it('after unfollow user followed should be correct', () => {
  const action = actions.unfollow(5023);
  const newState = usersReducer(state, action);
  expect(newState.users[1].followed).toBe(false);
});

it('after setting user users length should be correct', () => {
  const users = [
    {
      name: 'ronni1500',
      id: 5016,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: 'null',
      followed: false
    },
    {
      name: 'andrey_rafalsky',
      id: 5015,
      uniqueUrlName: null,
      photos: {
        small: 'null',
        large: 'null'
      },
      status: 'null',
      followed: false
    }
  ];
  const action = actions.setUsers(users);
  const newState = usersReducer(state, action);
  expect(newState.users.length).toBe(2);
});

it('after setting total pages it should be correct', () => {
  const action = actions.setTotalCountPages(1000);
  const newState = usersReducer(state, action);
  expect(newState.totalCount).toBe(1000);
});

it('after setting current page it should be correct', () => {
  const action = actions.setCurrentPage(1000);
  const newState = usersReducer(state, action);
  expect(newState.currentPage).toBe(1000);
});

it('after setting loading it should be correct', () => {
  const action = actions.setIsLoading(false);
  const newState = usersReducer(state, action);
  expect(newState.isFetching).toBe(false);
});
