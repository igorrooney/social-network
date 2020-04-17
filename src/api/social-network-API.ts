import { ProfileType, UserType, PhotoType } from './../types/types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a68c4b68-6d08-42c8-8761-c3e9204831f4'
  }
});

type AuthMeResponseType = {
  data: {
    id: number,
    email: string,
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

type LoginResponseType = {
  resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum
  messages: Array<string>
  data: {
    userId: number
  }
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeWithCaptchaEnum {
  CaptchaIsRequired = 10
}

type GetUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export const usersAPI = {
  
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },

  authMe() {
    return instance.get<AuthMeResponseType>('auth/me').then(res => res.data);
  },

  getProfile(id: number) {
    return instance.get<ProfileType>(`profile/${id}`).then(res => res.data);
  },

  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then(res => res.data);
  },

  followUser(id: number) {
    return instance.post(`follow/${id}`).then(res => res.data);
  },

  getStatus(id: number) {
    return instance.get(`profile/status/${id}`).then(res => res.data);
  },

  uploadPhoto(photo: any) {
    const formData = new FormData();
    formData.append('image', photo);

    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => res.data);
  },

  updateStatus(text: string) {
    return instance
      .put(`profile/status`, { status: text })
      .then(res => res.data);
  },

  updateProfile(profile: ProfileType) {
    return instance.put(`profile`, profile).then(res => res.data);
  }
};
export const authAPI = {
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data);
  },

  logOut() {
    return instance.delete(`auth/login`).then(res => res.data);
  }
}

export const securityAPI = {
  getCaptcha() {
    return instance.get('security/get-captcha-url').then(res => res.data);
  }
}