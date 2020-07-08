export const createRequestTypes = (prefix: string) => {
  const delimiter = '_'
  const generateBaseType = (base: string) => `${prefix}${delimiter}${base}`
  const createTypes = function(base: string) {
    return generateBaseType(base)
  }
  createTypes.asyncType = function(base: string) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc: any, type) => {
      acc[type] = `${prefix}${delimiter}${base}${delimiter}${type}`
      return acc
    }, { BASE: generateBaseType(base) })
  }
  return createTypes
}
