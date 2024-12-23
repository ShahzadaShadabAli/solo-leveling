import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
    const data = useContext(AuthContext)
    return data
}
 
export default useAuthContext;