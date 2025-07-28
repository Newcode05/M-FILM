import { instance } from "../../../Providers/axiosClient"
const useForget = () => {
    const fetchStep = (token) => {
        const data = {
            'token': token
        }
        return instance.post('/forgot-password/step', data);
    }
    return { fetchStep }
}
export { useForget };