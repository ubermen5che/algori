import axios from 'axios';
import dateSetting from '../dateSetting';

const base = require('../../utils/base')

export const registerProblem = async (props) => {
    const url =
        base.url + '/api/problems';

    console.log(props)
    const option = {
        url: url,
        method: 'POST',
        data: {
            userId: props.userId,
            title: props.title,
            link: props.link,
            tagList: props.tagList,
            notificationDate: dateSetting(props.notificationDate),
            step: props.step,
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        window.location.href = "/problems/" + response.data.problemId; // TODO 수정
    } catch (e) {
        console.log(e);
        return null;
    }
};

export default registerProblem;
