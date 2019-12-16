import axios from "axios";
import qs from "qs";

axios.interceptors.response.use(response => {
  console.log('response')
  return response
}, error => Promise.resolve(error.response));
let api = "http://127.0.0.1:3000"
function checkStatus(response) {
  return response.data
}

function checkCode(res) {
  return res;
}

export default {
    post(url, params,domain) {
        return axios({
            method: "POST",
            url: api + url,
            data: params,
            transformRequest: [function (data) {
                data = qs.stringify(data, {
                        serializeDate: (date) => {
                          return date.toString()
                        }
                      })
                return data;
            }],
        }).then(checkStatus).then(checkCode);
    },
    post2(url, params,domain) {
        return axios({
            method: "POST",
            url:api + url,
            header: {
                'Content-Type': 'application/json'
            },
            dataType:'json',
            data: params,
        }).then(checkStatus).then(checkCode);
    },
    get(url, params = {},domain) {
      return axios({
            method: "get",
            url: api + url,
            params,
            timeout: "2000"
        }).then(checkStatus).then(checkCode);
    },
    postForm(url, params, type) {
      return axios({
        method: "POST",
        url: api+url,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        transformRequest: [function (data) {
          data = qs.stringify(data, {
            serializeDate: (date) => {
              return date.toString()
            }
          })
          return data;
        }],
      }).then(checkStatus).then(checkCode);
    },
    postJson(url, params, type) {
      return axios({
        method: "POST",
        url: api+url,
        header: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: params,
      }).then(checkStatus).then(checkCode);
    },

};
