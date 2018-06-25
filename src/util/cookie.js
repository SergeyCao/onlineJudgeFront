export default {
  name: 'cookie',
  setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    console.info(cname + '=' + '111' + ';' + expires)
    document.cookie = cname + '=' + cvalue + ';' + expires
  },
  // 获取cookie
  getCookie (cname) {
    let reg = new RegExp('(^| )' + cname + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return (arr[2])
    } else {
      return null
    }
  }

}
