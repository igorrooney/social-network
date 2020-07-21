import { QueryType } from './../modules/users/users.reducer';
import { instance, GetItemsType, ResponseType } from "./social-network-API"
// Types
import { constructRequest } from "./urlFormatter"

export const usersAPI = {
  async getUsers(query: QueryType) {
    const url = constructRequest('users', query)
    const res = await instance
      .get<GetItemsType>(url)
    return res.data
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>
  },
  async followUser(id: number) {
    const res = await instance.post<ResponseType>(`follow/${id}`)
    return res.data
  },
  async getFriends(currentPage = 1, pageSize = 10, term: string | number) {
    const res = await instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=true&term=${term}`)
    return res.data
  },
}
