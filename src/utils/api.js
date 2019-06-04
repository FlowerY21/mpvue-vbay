
import util from './index' // 此处，引入存放对promise处理的文件

const ip = 'http://39.98.58.234:7001/v2/api-docs?group=MiniApi'  // 后台的ip地址
const getRequest = util.httpsPromisify(wx.request)

const request = (method, url, data = {}) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: ip + url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    }
  })
}

export default {
  // 接口
  // [自定义名字]: params => request([请求方法], [接口路径], params),
  // 例子
  // loadMenu: params => request('post', '/menu/loadMainMenu.do', params)


  // 登录
  login: params => request('post','/miniapp/login',params)

}
