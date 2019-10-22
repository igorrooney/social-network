import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a68c4b68-6d08-42c8-8761-c3e9204831f4'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },

  authMe() {
    return instance.get('auth/me').then(res => res.data);
  },

  getProfile(id) {
    return instance.get(`profile/${id}`);
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then(res => res.data);
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then(res => res.data);
  },

  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(res => res.data);
  },

  updateStatus(text) {
    return instance
      .put(`profile/status`, { status: text })
      .then(res => res.data);
  }
};