export const jsonParse = (val) => {
  try {
    return JSON.parse(val)
  } catch (e) {
    return false
  }
}

export const inArray = (val, array) => {
  for (let i in array) {
    if (array[i] === val) {
      return true
    }
  }
  return false
}