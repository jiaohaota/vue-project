/**
 * Created by Administrator on 2017/10/12.
 */
import axios from 'axios';
/*axios.defaults.headers.common["req-header-device"]="wap";
 axios.defaults.headers.common["req-header-device-type"]="4";
 axios.defaults.headers.common["req-header-app-version"]="3.0.0";
 axios.defaults.headers.common["req-header-push-id"]="";
 axios.defaults.headers.common["req-header-device-id"]="";
 axios.defaults.headers.common["req-header-channel-source"]="";
 axios.defaults.headers.common["req-header-request-time"]="1507864671000";
 axios.defaults.headers.common["ip"]="192.168.10.82:8080";*/
//请求列表数据头部
export function getRecommendData() {
  return axios({
    method: 'post',
    url: '/api/index',
    data: {
      "sign":"",
    },
    headers: {
      "req-header-device":"wap",
      "req-header-device-type":"4",
      "req-header-app-version":"3.0.0",
      "req-header-push-id":"",
      "req-header-client-version":"",
      "req-header-device-id":"",
      "req-header-channel-source":"",
      "req-header-request-time":"1507864671000",
      "ip":"192.168.10.82:8080"
    },
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
