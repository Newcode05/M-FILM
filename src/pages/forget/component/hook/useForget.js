import { intance } from "../../../../Providers/axiosClient"
const useForget = () => {
    const fetchStep = (token) => {
        const data = {
            'token': token
        }
        return intance.post('/forgot-password/step', data);
    }
    return { fetchStep }
}
export { useForget };