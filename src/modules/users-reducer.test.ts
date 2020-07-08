import usersReducer, { UsersInitialStateType } from 'modules/users/users.reducer'
import { actions } from 'modules/users/users.actions'

let state: UsersInitialStateType

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

test('set current page success', () => {
  const newState = usersReducer(state, actions.setCurrentPage(5))
  expect(newState.currentPage).toEqual(5)
  expect(newState.portion).toEqual(1)
  expect(newState.totalCount).toEqual(0)
  expect(newState.pageSize).toEqual(10)
})

test('set portion success', () => {
  const newState = usersReducer(state, actions.setPortion(5))
  expect(newState.portion).toEqual(5)
  expect(newState.totalCount).toEqual(0)
  expect(newState.pageSize).toEqual(10)
  expect(newState.currentPage).toEqual(1)
})
