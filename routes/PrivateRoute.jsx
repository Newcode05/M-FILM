import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/Providers/Context/AuthContext"
import { useEffect } from "react";

export const PrivateRoute = ({ roleCheck = "Admin", navigateTo = "/login", children }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) return;
        if (user.role !== roleCheck) {
            navigate(navigateTo)
        }
    }, [user.role]);
    return children;

}