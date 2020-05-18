import { instance, ResponseType, ResultCodeWithCaptchaEnum, ResultCodeEnum } from "./social-network-API"


type MeResponseDataType = {
  id: number,
  email: string,
  login: string
}

type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  authMe() {
    return instance.get<ResponseType<MeResponseDataType>>('auth/me').then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeWithCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data)
  },
  logOut() {
    return instance.delete(`auth/login`).then(res => res.data)
  }
}
