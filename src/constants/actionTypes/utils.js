export const createRequestTypes = prefix => {
  const delimiter = '_'
  const generateBaseType = base => `${prefix}${delimiter}${base}`
  const createTypes = function(base) {
    return generateBaseType(base)
  }
  createTypes.asyncType = function(base) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
      acc[type] = `${prefix}${delimiter}${base}${delimiter}${type}`
      return acc
    }, { BASE: generateBaseType(base) })
  }
  return createTypes
}
