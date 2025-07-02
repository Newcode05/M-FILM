import { useState } from "react";
import { intance } from "../../../Providers/axiosClient"

export const useLogOut = () => {
    const [logOutState, setLogOutState] = useState(false);
    const logOut = (user) => {
        intance.post("/logout")
            .then(res => {
                if (res.data.message === "success") setLogOutState(true);

            })
            .catch(err => { console.log("Error to log out", err); });
    }
    return { logOut }
}