
import axios from '@/utils/request';

// 获取验证码
const getCode = (sid) => {
    return axios.get('/auth/getCaptcha', {
        params: {
            sid: sid
        }
    })
}

function login(params){
    return axios.post('/auth/login', {
        ...params
    })
}

function sendMail(params){
    return axios.post('/auth/forget', {
        ...params
    })
}

export {
    getCode,
    login,
    sendMail
}