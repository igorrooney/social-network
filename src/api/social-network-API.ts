import { UserType } from 'types/types'
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a68c4b68-6d08-42c8-8761-c3e9204831f4'
  }
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeWithCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
