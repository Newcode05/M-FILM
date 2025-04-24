
import axios from "axios";
import Cookies from "js-cookie";
const intance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})
intance.interceptors.request.use(
    async (config) => {
        let token = Cookies.get('XSRF-TOKEN');
        if (!token) {
            try {
                const response = await axios.get('http://localhost:8000/sanctum/csrf-token', {
                    withCredentials: true
                });
                token = Cookies.get('XSRF-TOKEN');
            }
            catch (error) {
                console.log("Error to get Token:", error);
                return Promise.reject('Error');
            }
        }
        if (token) {
            config.headers['X-XSRF-TOKEN'] = token;
            config.withCredentials = true;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    });
intance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response.status == 419) {
        console.log('X-CSRF-TOKEN đã hết hạn');
        axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
        })
    }

})
export { intance }