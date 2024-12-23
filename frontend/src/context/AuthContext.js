import { createContext, useReducer } from "react"

export const AuthContext = createContext()

const reduce = (state, action) => {
    switch (action.method) {
        case "LOGIN":
            return { user: action.payload}
        case "LOGOUT":
            return { user: null }
        default:
            return state;
    }
    
}

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduce, {
        user: null
    })
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;