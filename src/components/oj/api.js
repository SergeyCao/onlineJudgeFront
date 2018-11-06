import axios from 'axios'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.xsrfCookieName = 'token'
// 后端往cookie写token 请求默认带token
const URL_API = '/api/'
const URL_USER = '/filter_api/'
const URL_ADMIN = '/admin/'
export default {
  addAnnouncement (data) {
    return ajax(URL_ADMIN + 'add_announcement', 'post', {
      data
    })
  },
  addProblem (data) {
    return ajax(URL_ADMIN + 'add_problem', 'post', {
      data
    })
  },
  getSubmission (id) {
    return ajax(URL_USER + 'code/' + id, 'get')
  },
  getSubmissions () {
    return ajax(URL_API + 'submissions', 'get')
  },
  submit (data) {
    return ajax(URL_USER + 'submit', 'post', {
      data
    })
  },
  getProblem (params) {
    return ajax(URL_API + 'problem', 'get',{
      params
    })
  },
  getProfile () {
    return ajax(URL_USER + 'profile', 'get')
  },
  getAnnouncementList () {
    return ajax(URL_API + 'announcements', 'post')
  },
  getProblemList () {
    return ajax(URL_API + 'problem_list', 'post')
  },
  register (data) {
    return ajax(URL_API + 'register', 'post', {
      data
    })
  },
  signIn (data) {
    return ajax(URL_API + 'login', 'post', {
      data
    })
  },
  ajax_file (url, method, file, id) {
    let data = new FormData()
    data.append('file', file)
    data.append('id', id)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return new Promise((resolve, reject) => {
      axios({
        url,
        method,
        data,
        config
      }).then(res => {
        // API正常返回(status=20x), 是否错误通过有无error判断
        if (res.data.error !== null) {
          resolve(res)
        }
      }).catch(e => {
        console.log(e)
      })
    })
  }

}
function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }
  console.log(options)
  console.log(params)
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => {
      // API正常返回(status=20x), 是否错误通过有无error判断
      if (res.data.error !== null) {
        resolve(res)
      }
    }).catch(e => {
      console.log(e)
    })
  })
}
