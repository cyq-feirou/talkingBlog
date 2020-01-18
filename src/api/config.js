let config = {
    timeout: 30000
  }
  // 接口自动区分
  const host = window.location.host
  if (host === "m.hfhomes.cn") {//生产
    config.api = "https://mall-api.hfhomes.cn/"
    config.domain = "https://[config].hfhomes.cn/"
    config.linkApi = "https://m.hfhomes.cn/"
    config.fullUrlPath = "https://m.hfhomes.cn/html/home/#/"
    config.imgServerUrl = "https://img[0].hfhomes.cn/"
    config.staticUrl = 'https://static.hfhomes.cn'
  } else {//本地
    config.linkApi = "http://192.168.0.116:8888"
  }
  module.exports = config
  
  