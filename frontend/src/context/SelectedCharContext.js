import { createContext, useReducer } from "react";

export const SelectedCharContext = createContext()

const reduce = (state, action) => {
    switch (action.method) {
        case "SELECT": 
        return { selected: action.payload }
        case "UNSELECT":
        return { selected: null }
    }
}

const SelectedCharContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduce, {
        selected: null
    })
    return (
        <SelectedCharContext.Provider value={{state, dispatch}}>
            {children}
        </SelectedCharContext.Provider>
    )
    
}
 
export default SelectedCharContextProvider;