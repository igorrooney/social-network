import { ResponseType, ResultCodeEnum, GetItemsType } from 'api/social-network-API'
import { followUser, actions, unfollowUser, requestUsers } from 'modules/users/users.actions'
import { usersAPI } from 'api/users-api'

jest.mock('api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  userAPIMock.followUser.mockClear()
  userAPIMock.unfollowUser.mockClear()
})

const result: ResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}

const getUsersResult: GetItemsType = {
  items: [],
  totalCount: 10,
  error: null
}

userAPIMock.followUser.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result))
userAPIMock.getUsers.mockReturnValue(Promise.resolve(getUsersResult))

test('success follow thunk', async () => {
  const thunk = followUser(1)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(1)
})

test('success unfollow thunk', async () => {
  const thunk = unfollowUser(1)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(1)
})

test('success request users', async () => {
  const thunk = requestUsers(1, 10)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(2)
})