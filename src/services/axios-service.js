import axios from 'axios';
export default class AxiosService {

    postService(url = '', payload = null, tokenRequired = false, httpOptions = null) {
        return axios.post(url, payload, tokenRequired && httpOptions);
    }
}