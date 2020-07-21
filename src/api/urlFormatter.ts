import pickBy from 'lodash.pickby'
import negate from 'lodash.negate'

export const isArray = (arr: any) => Array.isArray(arr)
export const isObject = (value: string | any[]) => (
  value && typeof value === 'object' && value.constructor === Object
)
const { keys } = Object
export const isEmpty = (obj: string | any[]) => keys(obj).length === 0
export const isNil = (value: any[] | null) => value == null

export const checkEmptyParams = (value: string | any[]) => {
  if (isArray(value)) {
    return !value.length
  }
  if (isObject(value)) {
    return isEmpty(value)
  }
  if (typeof value === 'string') {
    return !value.length
  }
  return isNil(value)
}

export const deleteEmptyPathSections = (url: string) => {
  const endsEmpty = /\/(undefined|null|false|0)$/g
  if (endsEmpty.test(url)) {
    return url.replace(endsEmpty, '')
  }
  return url
}

export const formatUrl = (url: string, params: any) => {
  const cleanUrl = deleteEmptyPathSections(url)

  if (!params) return cleanUrl

  const paramsString = new URLSearchParams(
    pickBy(params, negate(checkEmptyParams))
  ).toString()
  if (!paramsString) return cleanUrl

  return `${cleanUrl}?${paramsString}`
}

export const constructRequest = (endpoint: any, params: any) => (
  formatUrl(endpoint, params)
)

