import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const useLogin = (user) => {
    
    const navigate = useNavigate()
    const { state, dispatch } = useAuthContext()
    const login = async () => {
        await dispatch({ method: "LOGIN", payload: user.data })
        localStorage.setItem('users', JSON.stringify(user.data))
        navigate('/dashboard')
    }
    return login
}

export default useLogin;