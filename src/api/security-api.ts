import { instance } from "./social-network-API"

type GetCaptchaUrlResponseType = {
  url: string
}

export const securityAPI = {
  getCaptcha() {
    return instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url').then(res => res.data)
  }
}
