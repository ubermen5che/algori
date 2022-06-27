import axios from 'axios';

const base = require('../../utils/base')

export const getTagListApi = async () => {
    const url =
        base.url + '/api/tags?' + 'userId=' + localStorage.getItem('userId');
    try {
        const response = await axios.get(`${url}`);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

export default getTagListApi;