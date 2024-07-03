export const sleep = (seconds = 3) => {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}