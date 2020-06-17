import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        appkey: "zhu_764956153_1585574487843"
    }
    return config;
})
export default axios