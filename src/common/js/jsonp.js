import originJSONP from 'jsonp'
export default function jsonp(url, data, origin) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, origin, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * @returns {string}
 * @param data
 */
function params (data) {
  let url = ''
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      let value = data[i] !== undefined ? data[i] : ''
      url += `&${i}=${encodeURIComponent(value)}`
    }
  }
  return url ? url.substring(1) : ''
}
