
import axios from "axios";
import Cookies from "js-cookie";
const APP_URL = `http://${window.location.hostname}:8000`;
const intance = axios.create({
    baseURL: APP_URL,
    withCredentials: true
})
intance.interceptors.request.use(
    async (config) => {
        let token = Cookies.get('XSRF-TOKEN');
        if (!token) {
            try {
                const response = await axios.get(`${APP_URL}/sanctum/csrf-cookie`, {
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
}, async (err) => {
    if (err.response.status === 419) {
        try {
            console.log('X-CSRF-TOKEN đã hết hạn');
            const newConfig = err.config;
            const ref = await axios.get(`${APP_URL}/sanctum/csrf-cookie`, {
                withCredentials: true
            })
            let token = Cookies.get('XSRF-TOKEN');
            newConfig.headers['X-XSRF-TOKEN'] = token;
            newConfig.withCredentials = true;
            return intance(newConfig);
        }
        catch (err) {
            return Promise.reject('Error');
        }


    }
    else {
        return Promise.reject(err);
    }

})
export { intance }