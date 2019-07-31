
import util from './index' // 此处，引入存放对promise处理的文件

const ip = 'https://3.104.54.171:7443'  // 后台的ip地址
const getRequest = util.httpsPromisify(wx.request)


export const getToken = () => {
  const res = wx.getStorageSync('token')
  // console.log(res)
  return res
}

const request = (method, url, needToken, data = {}, type) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: ip + url,
    data: data,
    method: method,
    // header: {
    //   'content-type': 'application/json'
    // }

    header: Object.assign({
      "Content-Type": type ? 'multipart/form-data' : "application/x-www-form-urlencoded"
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
  authenticateV2: params => request('post','/miniapp/authenticateV2',true,params, true),

  //  ======首页======
  // '获取商户分类列表'
  businessTypeList: () => request('post','/consumer/business/businessTypeList'),
  // 首页商户列表
  businessList: params => request('post', '/miniapp/business/businessList', true, params ),
  // 首页搜索
  getHotSearch: () => request('post', '/miniapp/business/getHotSearch', true ),
  // 搜索商户
  search: params => request('post', '/miniapp/business/search', false, params ),


  // ======我的======
  // '获取商户分类列表'
  accountList: params => request('post','/consumer/accountList', true, params),
  // 我的活动
  myActivityList: params => request('post','/miniapp/myActivityList', true, params),
  // 修改昵称
  changeNickname: params => request('post', '/miniapp/changeNickname', true, params),
  // 修改邮箱
  changeEmail: params => request('post', '/miniapp/changeEmail', true, params),
  // 修改地址
  changeLocation: params => request('post', '/miniapp/changeLocation', true, params),


  // ======会员======
  // 会员列表
  myVipList : params => request('post', '/miniapp/myVIPList', true, params)

}

