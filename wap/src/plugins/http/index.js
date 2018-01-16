import axios from 'axios'
import qs from 'qs'

/**
 * Create Axios
 */
export const http = axios.create({
  baseURL: apiUrl,
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    data = qs.stringify(data, {arrayFormat: 'indices'});
    // data = JSON.stringify(data);
    // console.log('data: ', data);
    return data
  }]
})

/**
 * 重写get请求,使第二个参数为请求参数
 */
let get = http.get
http.get = function (url, params, config) {
  return get(url, Object.assign(config || {}, {params: params}))
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
http.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

// http.defaults.headers.post['Content-Type'] = 'application/json';

http.defaults.withCredentials = true

/**
 * 处理返回结果
 * @param data
 */
let handleData = (requestUrl, data) => {
  return data
}

/**
 * Handle all error messages.
 */
http.interceptors.response.use(function (response) {
  return handleData(response.request.responseURL, response.data)
}, function (error) {
  const { response } = error

  if ([401].indexOf(response.status) >= 0) {
    if (response.status === 401 && response.data.error.message !== 'Unauthorized') {
      return Promise.reject(response)
    }
    window.location = '/login'
  }

  return Promise.reject(error)
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
