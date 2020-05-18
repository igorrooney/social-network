import { instance, GetItemsType, ResponseType } from "./social-network-API"

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then(res => res.data) as Promise<ResponseType>
  },
  followUser(id: number) {
    return instance.post<ResponseType>(`follow/${id}`).then(res => res.data)
  }
}