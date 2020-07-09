import { instance, GetItemsType, ResponseType } from "./social-network-API"

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10, term: string | number) {
    const res = await instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
    return res.data
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>
  },
  async followUser(id: number) {
    const res = await instance.post<ResponseType>(`follow/${id}`)
    return res.data
  },
  async getFriends(currentPage = 1, pageSize = 10) {
    const res = await instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=true`)
    return res.data
  },
}
