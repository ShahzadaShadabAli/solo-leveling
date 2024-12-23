import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

const useCharacterContext = () => {
    const value = useContext(CharacterContext)
    return value
}
 
export default useCharacterContext;