import axios from 'axios';

const base = require('../../utils/base')

export const getProblemListApi = async (tagName, page) => {
    console.log(tagName);
    const url =
        base.url + '/api/problems?tag=' + tagName + '&userId=' + localStorage.getItem('userId');
    try {
        const response = await axios.get(`${url}`);
        console.log(response);
        return response.data;
    } catch (e) {
        return [];
    }
};

export default getProblemListApi;