/**
 * request 模块
 * @author yanxxit
 * @description 将request-promise进行简单封装，使得使用时更加方便
 */
const rp = require('request-promise');
const request = require('request');
const moment = require('moment');
const querystring = require('querystring');
const conf = require("./config")

/** 获取 headers.Authorization */
var getAuthorization = () => {
  const v = conf.AppKey + ":" + conf.MasterSecret;
  var bff = Buffer.from(v, "utf8")
  var Authorization = "Basic " + bff.toString("base64");
  return Authorization
}

const current_headers: any = {
  Authorization: getAuthorization()
}


/**
 * 设置通用headers 信息
 * @param {Object} headers 
 */
const setHeaders = (headers = {}) => {
  headers['request-time'] = new Date().getTime();
  Object.assign(headers, current_headers)
}
/** 格式化接口信息 */
const formatRequestInfo = (type: string, uri: string, body: any, headers: any, data: any) => {
  let restime = moment().diff(moment(headers['request-time']), 'milliseconds') + 'ms';
  let info = [moment().format("YYYY-MM-DD HH:mm:ss"), type, uri, restime]

  console.log("httplib:--> ", info.join(" "));
  if (body) console.log("httplib:--> ", "body:" + JSON.stringify(body))
}
const SuccessRequest = (type: string, uri: string, body: any, headers: any, data: any) => {
  formatRequestInfo(type, uri, body, headers, data)
  if (data && data.error && data.error) return data.error;
  return data
}
const ErrorResponse = (type: string, uri: string, body: any, headers: any, err: any) => {
  formatRequestInfo(type, uri, body, headers, err)
  if (err.error && Array.isArray(err.error) && err.error.length > 0) {
    return err.error[0].error;
  }
  if (err.error && !Array.isArray(err.error) && err.error.error) {
    return err.error.error;
  }
  return { error: -1, message: "other error", data: err.message }
}

/**
 * POST JSON 请求
 * @param {string} uri 接口地址
 * @param {Object} body 请求内容 json模式
 * @param {Object} headers 请求headers
 */
export var post = async (uri: string, body: any = {}, headers: any = {}) => {
  try {
    setHeaders(headers)
    let data = await rp.post(uri, { body, json: true, headers })
    return SuccessRequest('POST', uri, body, headers, data)
  } catch (err) {
    return ErrorResponse('POST', uri, body, headers, err)
  }
}
/**
 * GET JSON 请求
 * @param {string} uri 接口地址
 * @param {Object} query 请求内容 json模式
 * @param {Object} headers 请求headers
 */
export var get = async (uri: string, query: any = {}, headers: any = {}) => {
  try {
    setHeaders(headers)
    let [url1, url2] = uri.split('?')
    let urlPrams = querystring.parse(url2);
    for (let k in urlPrams) {
      query[k] = urlPrams[k]
    }

    let params = querystring.stringify(query);
    uri = url1 + (params ? '?' + params : '')

    let data = await rp.get(uri, { json: true, headers })
    return SuccessRequest('GET', uri, query, headers, data)
  } catch (err) {
    return ErrorResponse('GET', uri, query, headers, err)
  }
}

/**
 * PUT JSON 请求
 * @param {string} uri 接口地址
 * @param {Object} body 请求内容 json模式
 * @param {Object} headers 请求headers
 */
export var put = async (uri: string, body: any = {}, headers: any = {}) => {
  try {
    setHeaders(headers)
    let data = await rp.put(uri, { body, headers, json: true });
    return SuccessRequest('PUT', uri, body, headers, data)
  } catch (err) {
    return ErrorResponse('PUT', uri, body, headers, err)
  }
};
/**
 * DEL JSON 请求
 * @param {string} uri 接口地址
 * @param {Object} body 请求内容 json模式
 * @param {Object} headers 请求headers
 */
export var del = async (uri: string, body: any = {}, headers: any = {}) => {
  try {
    setHeaders(headers)
    let data = await rp.del(uri, { body, headers, json: true });
    return SuccessRequest('DEL', uri, body, headers, data)
  } catch (err) {
    return ErrorResponse('DEL', uri, body, headers, err)
  }
};
