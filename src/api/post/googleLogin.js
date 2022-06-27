import axios from 'axios';

const base = require('../../utils/base')

const googleLogin = async (accessToken, nickname) => {
    console.log
    const url =
        base.url + '/auth/google/callback';

    const option = {
        url: url,
        method: 'GET',
        data: { "accessToken": accessToken }
    }

    try {
        const response = await axios(option);
        if (response.data.status === 200) {
            console.log('로그인 성공')
            sessionStorage.setItem("nickname", response.data.data.nickname)
            sessionStorage.setItem("access_token", response.data.data.access_token)
            window.location.href = '/'
        }
        else {
            window.location.href = '/'
        }
    } catch (e) {
        sessionStorage.setItem("nickname", nickname)
        window.location.href = '/'
        return null;
    }
};

export default googleLogin;