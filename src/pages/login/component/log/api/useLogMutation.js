import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../services/login";
export const useLogMutation = ({ onSuccess = () => { }, onError = () => { } }) => {

    return useMutation(
        {
            mutationFn: loginApi,
            onSuccess: onSuccess,
            onError: onError

        }
    )
}