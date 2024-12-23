import { useContext } from "react";
import { SelectedCharContext } from "../context/SelectedCharContext";

const useSelectedCharContext = () => {
    const value = useContext(SelectedCharContext)
    return value;
}
 
export default useSelectedCharContext;