import axios from 'axios';

const base = require('../../utils/base')

export const getProblemApi = async (idx) => {
    const url =
        base.url + '/api/problems/' + idx;
    try {
        const response = await axios.get(`${url}`);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(e);
        //window.location.href = "/404"
    }
}

export default getProblemApi;