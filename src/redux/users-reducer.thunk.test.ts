import { ResponseType, ResultCodeEnum, GetItemsType } from 'api/social-network-API'
import { followUser, actions, unfollowUser, requestUsers } from 'redux/users-reducer'
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

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
  const thunk = unfollowUser(1)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success request users', async () => {
  const thunk = requestUsers(1, 10)
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(5)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setCurrentPage(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setIsLoading(true))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setIsLoading(false))
  expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.setUsers([]))
  expect(dispatchMock).toHaveBeenNthCalledWith(5, actions.setTotalCountPages(10))
})