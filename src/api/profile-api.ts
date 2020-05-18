import { PhotoType } from 'types/types'
import { instance, ResponseType } from "./social-network-API"
import { ProfileType } from "types/types"

type UploadPhotoResponseDataType = {
  photos: PhotoType
}

export const profileAPI = {
  getProfile(id: number) {
    return instance.get<ProfileType>(`profile/${id}`).then(res => res.data)
  },  
  getStatus(id: number) {
    return instance.get<string>(`profile/status/${id}`).then(res => res.data)
  },
  updateStatus(text: string) {
    return instance
      .put<ResponseType>(`profile/status`, { status: text })
      .then(res => res.data)
  },
  uploadPhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)

    return instance
      .put<ResponseType<UploadPhotoResponseDataType>>(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => res.data)
  },
  updateProfile(profile: ProfileType) {
    return instance.put<ResponseType>(`profile`, profile).then(res => res.data);
  }
}
