import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../Providers/axiosClient"

const getOtpApi = async ({ url, data }) => {
  const res = await instance.post(url, data);
  return res.data;
}
const verifyOtpApi = async ({ url = "/verifyOtp", data }) => {
  const res = await instance.post(url, data);
  return res.data;
}


export const useGetOtpMutation = ({ options = {} }) =>
  useMutation({ mutationFn: getOtpApi, ...options });

export const useVerifyOtpMutation = ({ options = {} }) =>
  useMutation({ mutationFn: verifyOtpApi, ...options })

