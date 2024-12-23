import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";
import {jwtDecode} from 'jwt-decode';

const useCheckValidate = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useAuthContext();

    useEffect(() => {
        function isTokenExpired(token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 < Date.now()) {
                    return true; // Token is expired
                } else {
                    return false; // Token is valid
                }
            } catch (error) {
                console.error("Invalid token");
                return true; // Treat invalid token as expired
            }
        }
        const user = JSON.parse(localStorage.getItem('users'))
        if (user && !isTokenExpired(user.token)) { 
            dispatch({ method: "LOGIN", payload: user });
            navigate('/dashboard');
        } else {
            dispatch({ method: "LOGOUT" });
           localStorage.removeItem('users');
            navigate('/');
        }
    }, [dispatch, navigate]);
}

export default useCheckValidate;
