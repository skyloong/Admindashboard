import axios from 'axios'
//import store from '@/store'

const service = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000 
})

service.interceptors.request.use(
    config => {
        //config.headers['Authorization'] = 'Bearer' + token
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code != 0) {
            console.log(res.msg)
        } else {
            return res;
        }
    },
    error => {
        return Promise.reject(error);
    }
)

export default service