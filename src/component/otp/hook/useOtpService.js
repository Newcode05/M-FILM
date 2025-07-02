import { intance } from "../../../Providers/axiosClient"
export const otpService = {
    request: (url, data) => intance.post(`${url}/getOtp`, data),
    verify: (url, data) => intance.post(`${url}/verifyOtp`, data)
  };
  