
import util from './index' // 此处，引入存放对promise处理的文件

const ip = 'https://39.98.58.234:7443'  // 后台的ip地址
const getRequest = util.httpsPromisify(wx.request)

const request = (method, url, data = {},needToken) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: ip + url,
    data: data,
    method: method,
    // header: {
    //   'content-type': 'application/json'
    // }

    header: Object.assign({
      "Content-Type":"application/x-www-form-urlencoded"
    }, needToken ? {token: getToken()} : {}),
  })
}

export default {
  // 外部登录首次注册
  registerEx: params => request('post','/miniapp/registerEx',params),
  // 登录
  login: params => request('post','/miniapp/login',params),
  // codeSession
  codeSession: params => request('post','/miniapp/code2Session',params,false),

}
