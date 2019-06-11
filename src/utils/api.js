
import util from './index' // 此处，引入存放对promise处理的文件

const ip = 'https://39.98.58.234:7443'  // 后台的ip地址
const getRequest = util.httpsPromisify(wx.request)


export const getToken = () => {
  const res = wx.getStorageSync('token')
  console.log(res)
  return res
}

const request = (method, url, needToken, data = {}) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: ip + url,
    data: data,
    method: method,
    // header: {
    //   'content-type': 'application/json'
    // }

    header: Object.assign({
      "Content-Type":"application/x-www-form-urlencoded"
    }, needToken ? {'vbay-access-token': getToken()} : {}),
  })
}

export default {
  // 发送验证码
  sendSMS: params => request('post','/common/sendSMS',false,params),
  // 获取国际冠码
  getPrefixNumbers: () => request('post','/common/getPrefixNumbers',false),
  // 获取行政区列表
  getRegions: params => request('post','/common/getRegions',false,params),

  // 外部登录首次注册
  registerEx: params => request('post','/miniapp/registerEx',true,params),
  // codeSession
  codeSession: params => request('post','/miniapp/code2Session',false,params),
  // 登录vbay
  login: params => request('post','/miniapp/login',true,params),

  // 获取当前用户VBC
  getVBC: () => request('post','/miniapp/getVBC',true),
  // 获取用户详细信息
  getUserInfo: () => request('post','/miniapp/getUserInfo',true),
  // 获取认证信息
  getAuthenticate: () => request('post','/miniapp/getAuthenticate',true),
  // 一级认证
  authenticateV1: params => request('post','/miniapp/authenticateV1',true,params),
  // 二级认证
  authenticateV2: params => request('post','/miniapp/authenticateV2',true,params),


  // 获取商家会员信息
  getVIPTypes: params => request('post','/miniapp/business/vip/getVIPTypes',true,params),

}
