import usersReducer, { actions } from './users-reducer'
import { InitialStateType } from './users-reducer'

const initialState = {
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
  const newState = usersReducer(initialState, action);
  expect(newState.users[0].followed).toBe(true);
});

it('after unfollow user followed should be correct', () => {
  const action = actions.unfollow(5023);
  const newState = usersReducer(initialState, action);
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
  const newState = usersReducer(initialState, action);
  expect(newState.users.length).toBe(2);
});

it('after setting total pages it should be correct', () => {
  const action = actions.setTotalCountPages(1000);
  const newState = usersReducer(initialState, action);
  expect(newState.totalCount).toBe(1000);
});

it('after setting current page it should be correct', () => {
  const action = actions.setCurrentPage(1000);
  const newState = usersReducer(initialState, action);
  expect(newState.currentPage).toBe(1000);
});

it('after setting loading it should be correct', () => {
  const action = actions.setIsLoading(false);
  const newState = usersReducer(initialState, action);
  expect(newState.isFetching).toBe(false);
});


// -----------------------------------------------------------

let state: InitialStateType

beforeEach(() => {
  state = {
    users: [
      {
        id: 5024,
        name: 'VimbaVimba',
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 0',
        followed: false,
      },
      {
        id: 5023,
        name: 'Murad',
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 1',
        followed: true
      },
      {
        id: 5022,
        name: 'alex1',
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 3',
        followed: true
      },
      {
        name: 'alexj1055',
        id: 5021,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 4',
        followed: true
      },
      {
        name: 'Avocato',
        id: 5020,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 5',
        followed: false
      },
      {
        name: 'apollo',
        id: 5019,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 6',
        followed: false
      },
      {
        name: 'maqq1e',
        id: 5018,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 7',
        followed: false
      },
      {
        name: 'alexmanwell',
        id: 5017,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 8',
        followed: false
      },
      {
        name: 'ronni1500',
        id: 5016,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 9',
        followed: false
      },
      {
        name: 'andrey_rafalsky',
        id: 5015,
        photos: {
          small: 'null',
          large: 'null'
        },
        status: 'status 10',
        followed: false
      }
    ],
    portion: 1,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  }
  
})

test('follow success', () => {
  const newState = usersReducer(state, actions.follow(5020))
  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[4].followed).toBeTruthy()
})

test('unfollow success', () => {
  const newState = usersReducer(state, actions.unfollow(5023))
  expect(newState.users[2].followed).toBeTruthy()
  expect(newState.users[1].followed).toBeFalsy()
})
