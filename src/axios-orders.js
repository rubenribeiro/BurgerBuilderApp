import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-my-burger-6aef6.firebaseio.com/'
});

export default axiosInstance;