import { createContext, useReducer } from "react";

export const CharacterContext = createContext()

const reduce = (state, action) => {
    if (action.method == "SAVE") {
        return {characters: action.payload}
    }
}

const CharacterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduce, {
        characters: null
    })
    return (
        <CharacterContext.Provider value={{state, dispatch}}>
            {children}
        </CharacterContext.Provider>
    );
}
 
export default CharacterContextProvider;